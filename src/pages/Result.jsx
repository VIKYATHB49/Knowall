import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Notification from '../components/Notification';
import passImg from '../assets/images/Pass.png';
import failImg from '../assets/images/Fail.png';
import Noresults from '../assets/images/Noresults.png';
import '../assets/css/Result.css';
import { evaluateEssay } from './../utils/helpers';

const calculateResultMetrics = (resultDataFromState) => {
    const { test = {}, answers = {} } = resultDataFromState;
    if (!test?.sections) {
        return { sectionalPerformance: [], overallMetrics: {} };
    }

    const sectionalPerformance = test.sections.map((section) => {
        const s_questions = section.questions || [];
        const s_answers = answers[section.name] || [];
        if (s_questions.length === 0) return null;

        let s_correct = 0;
        let s_attempted = 0;
        let s_marksObtained = 0;

        s_questions.forEach((q, index) => {
            const userAnswer = s_answers[index];
            const isAttempted = userAnswer !== null && userAnswer !== undefined && userAnswer !== '';

            if (isAttempted) {
                s_attempted++;
                if (q.type === 'essay') {
                    s_marksObtained += evaluateEssay(userAnswer);
                    s_correct++;
                } else {
                    if (userAnswer === q.correctAnswerIndex) {
                        s_correct++;
                        s_marksObtained += section.PositiveMark || 1;
                    } else {
                        s_marksObtained -= section.NegativeMark || 0;
                    }
                }
            }
        });

        const s_totalMarks = section.marks || 0;
        const s_wrong = s_attempted - s_correct;
        const s_percentage = s_totalMarks > 0 ? (Math.max(0, s_marksObtained) / s_totalMarks) * 100 : 0;
        const s_accuracy = s_attempted > 0 ? (s_correct / s_attempted) * 100 : 0;

        return {
            name: section.name,
            attempted: s_attempted,
            totalQuestions: s_questions.length,
            correct: s_correct,
            wrong: s_wrong,
            marksObtained: s_marksObtained,
            totalMarks: s_totalMarks,
            percentage: s_percentage,
            accuracy: s_accuracy,
        };
    }).filter(Boolean);

    const overall = sectionalPerformance.reduce((acc, sec) => {
        acc.totalMarks += sec.totalMarks;
        acc.marksObtained += sec.marksObtained;
        acc.totalQuestions += sec.totalQuestions;
        acc.totalCorrect += sec.correct;
        acc.totalAttempted += sec.attempted;
        return acc;
    }, { totalMarks: 0, marksObtained: 0, totalQuestions: 0, totalCorrect: 0, totalAttempted: 0 });

    const { totalMarks, marksObtained, totalQuestions, totalCorrect, totalAttempted } = overall;
    const overallPercentage = totalMarks > 0 ? (Math.max(0, marksObtained) / totalMarks) * 100 : 0;
    const overallAccuracy = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0;

    let qualifier = 60; // Default
    if (test.qualifyingPercentage !== undefined && test.qualifyingPercentage !== null && test.qualifyingPercentage !== "") {
        qualifier = parseFloat(test.qualifyingPercentage);
    }

    const status = overallPercentage >= qualifier ? 'Qualified' : 'Not Qualified';

    const overallMetrics = {
        testName: test.testName || 'Unknown Test',
        marksObtained,
        totalMarks,
        overallPercentage,
        overallAccuracy,
        status,
        timeSpentSec: resultDataFromState.timeSpentSec || 0,
        violations: resultDataFromState.violations || 0,
        isAutoSubmitted: resultDataFromState.isAutoSubmitted || false,
        qualifyingPercentage: qualifier,
        totalQuestions,
        totalCorrect,
        totalAttempted,
    };

    return { sectionalPerformance, overallMetrics };
};

const transformUrlToDbName = (urlSlug) => {
    if (!urlSlug) return '';
    return urlSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('_');
};

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { testName } = useParams();

    const [notification, setNotification] = useState({ message: '', type: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [resultData, setResultData] = useState(null);
    const [notAttempted, setNotAttempted] = useState(false);

    useEffect(() => {
        const freshResultState = location.state;
        if (freshResultState && freshResultState.answers) {
            saveAndDisplayResult(freshResultState);
        } else {
            fetchResult(testName);
        }
    }, [testName, location.state]);

    const saveAndDisplayResult = async (freshResultState) => {
        setIsLoading(true);
        const { sectionalPerformance, overallMetrics } = calculateResultMetrics(freshResultState);

        const payload = {
            testName: overallMetrics.testName,
            marksObtained: overallMetrics.marksObtained,
            totalMarks: overallMetrics.totalMarks,
            percentage: overallMetrics.overallPercentage,
            accuracy: overallMetrics.overallAccuracy,
            totalQuestions: overallMetrics.totalQuestions,
            totalCorrect: overallMetrics.totalCorrect,
            totalAttempted: overallMetrics.totalAttempted,
            isQualified: overallMetrics.status === 'Qualified',
            qualifier: overallMetrics.qualifyingPercentage,
            timeSpentSec: overallMetrics.timeSpentSec,
            violations: overallMetrics.violations,
            isAutoSubmitted: overallMetrics.isAutoSubmitted,
            sectionalPerformance: sectionalPerformance,
        };

        try {
            const token = localStorage.getItem('jwtToken');
            if (!token) throw new Error('Authentication required.');

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/results/save`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save results.');
            }

            await fetchResult(testName);
            setNotification({ message: 'Results saved successfully!', type: 'success' });

        } catch (err) {
            setError(`Error: ${err.message}`);
            console.error('Save error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchResult = async (urlTestName) => {
        setIsLoading(true);
        setNotAttempted(false);
        try {
            const token = localStorage.getItem('jwtToken');
            if (!token) throw new Error('You must be logged in to view results.');

            const dbTestName = transformUrlToDbName(urlTestName);

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/results/${dbTestName}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.status === 404) {
                setNotAttempted(true);
                return;
            }
            if (!response.ok) throw new Error('Failed to fetch test results.');

            const savedResult = await response.json();

            const qualifyingPercentage = (savedResult.qualifying_percentage !== undefined &&
                savedResult.qualifying_percentage !== null &&
                savedResult.qualifying_percentage !== "") ?
                parseFloat(savedResult.qualifying_percentage) : 60;

            const overallPercentage = parseFloat(savedResult.overall_percentage || savedResult.overallPercentage || 0);

            setResultData({
                sectionalPerformance: savedResult.sectional_results || savedResult.sectionalResults,
                overallMetrics: {
                    testName: savedResult.test_name || savedResult.testName,
                    marksObtained: savedResult.marks_obtained || savedResult.marksObtained,
                    totalMarks: savedResult.total_marks || savedResult.totalMarks,
                    percentage: overallPercentage,
                    accuracy: parseFloat(savedResult.overall_accuracy || savedResult.overallAccuracy || 0),
                    timeSpentSec: savedResult.time_spent_seconds || savedResult.timeSpentSeconds || 0,
                    qualifier: qualifyingPercentage,
                    isAutoSubmitted: savedResult.auto_submitted || savedResult.isAutoSubmitted || false,
                    violations: savedResult.violation_count || savedResult.violations || 0,
                    status: overallPercentage >= qualifyingPercentage ? 'Qualified' : 'Not Qualified',
                },
                test: {
                    testName: savedResult.test_name || savedResult.testName,
                    qualifyingPercentage: qualifyingPercentage
                }
            });

        } catch (err) {
            setError(err.message);
            console.error('Fetch error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Disable back navigation to exam page
    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            navigate("/assessments", { replace: true });
        };

        window.history.pushState(null, "", window.location.href);
        window.addEventListener("popstate", handleBackButton);

        return () => window.removeEventListener("popstate", handleBackButton);
    }, [navigate]);

    useEffect(() => { if (document.fullscreenElement) document.exitFullscreen(); }, []);

    if (isLoading) return <div className="result-container loading"><h2>Loading Results...</h2></div>;

    if (notAttempted) {
        return (
            <div className="result-container" style={{ textAlign: 'center', paddingTop: '50px' }}>
                <img src={Noresults} alt="Not Attempted" style={{ maxWidth: '200px', marginBottom: '20px' }} />
                <h2>You have not attempted this test yet.</h2>
                <button
                    className="view-solutions-btn"
                    onClick={() => navigate('/assessments')}
                >
                    Attempt Now
                </button>
            </div>
        );
    }

    if (error) return <div className="result-container error"><h2>Error</h2><p>{error}</p></div>;
    if (!resultData) return <div className="result-container error"><h2>No Result Data</h2><p>Could not find any results to display.</p></div>;

    const { sectionalPerformance, overallMetrics, test } = resultData;

    const {
        percentage,
        accuracy,
        timeSpentSec,
        qualifier,
        marksObtained,
        totalMarks,
        status
    } = overallMetrics;

    const passed = parseFloat(percentage) >= parseFloat(qualifier);
    const fmtTime = (sec) => `${Math.floor(sec / 60)} Mins, ${String(sec % 60).padStart(2, '0')} Sec`;
    const fmtPerc = (n) => (n ? n.toFixed(2) : '0.00') + '%';

    const overallStats = [
        { label: 'Time Spent', value: fmtTime(timeSpentSec) },
        { label: 'Marks', value: `${marksObtained?.toFixed(2)} / ${totalMarks?.toFixed(2)}` },
        { label: 'Percentage', value: fmtPerc(percentage) },
        { label: 'Accuracy', value: fmtPerc(accuracy) },
        { label: 'Status', value: status },
        { label: 'Qualifying %', value: fmtPerc(qualifier) },
    ];

    return (
        <div className="result-container">
            {notification.message && <Notification message={notification.message} type={notification.type} onClose={() => setNotification({ message: '', type: '' })} />}
            <div className="result-inner">
                <div className="result-left">
                    <h1>{test.testName || 'Exam Results'}</h1>
                    <div className="stats-grid">
                        {overallStats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="label">{stat.label}</div>
                                <div className="value">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="result-right">
                    <img src={passed ? passImg : failImg} alt={passed ? 'Pass' : 'Fail'} />
                </div>
            </div>

            <h2 className="sectional-title">Sectional Summary</h2>
            <div className="table-responsive">
                <table className="sectional-summary">
                    <thead>
                        <tr>
                            <th>Section</th>
                            <th>Attempted</th>
                            <th>Correct</th>
                            <th>Wrong</th>
                            <th>Marks</th>
                            <th>Accuracy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sectionalPerformance.map((sec, index) => (
                            <tr key={index}>
                                <td>{sec.name ?? sec.sectionName}</td>
                                <td>{sec.attempted ?? sec.attemptedQuestions}</td>
                                <td>{sec.correct ?? sec.correctAnswers}</td>
                                <td>{sec.wrong ?? sec.wrongAnswers}</td>
                                <td>{`${(sec.marksObtained ?? sec.marks_obtained ?? 0).toFixed(2)} / ${(sec.totalMarks ?? sec.total_marks ?? 0).toFixed(2)}`}</td>
                                <td>{fmtPerc(sec.accuracy ?? sec.sectionAccuracy)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Result;
