import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Negative from '../assets/images/Negative.png';
import Noresults from '../assets/images/Noresults.png';
import '../assets/css/AssessmentDetails.css';

const AssessmentDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const test = location.state;

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState("details");
    const [previousAttempts, setPreviousAttempts] = useState([]);
    const [isLoadingAttempts, setIsLoadingAttempts] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsLoggedIn(true);
            fetchPreviousAttempts(token);
        } else {
            setIsLoggedIn(false);
            setIsLoadingAttempts(false);
        }
    }, [test]);

    const fetchPreviousAttempts = async (token) => {
        if (!test || !test.testName) {
            setIsLoadingAttempts(false);
            return;
        }
        setIsLoadingAttempts(true);
        try {
           const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/assessments/${test.testName}/attempts`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (!response.ok) throw new Error('Failed to fetch attempts');

            const data = await response.json();
            data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
            setPreviousAttempts(data);
        } catch (error) {
            console.error("Error fetching previous attempts:", error);
        } finally {
            setIsLoadingAttempts(false);
        }
    };

    const handleStartButtonClick = () => {
        if (!test) return;
        
        const instructionsPath = `${location.pathname}/instructions`;

        if (isLoggedIn) {
            navigate(instructionsPath, { state: test });
        } else {
            navigate('/login', { state: { from: location, testData: test } });
        }
    };

    const handleViewResultClick = () => {
        navigate(`${location.pathname}/result`);
    };

    if (!test) {
        return <p style={{ textAlign: 'center', padding: '50px' }}>No assessment selected.</p>;
    }

    const hasAttempted = previousAttempts.length > 0;

    return (
        <div className="details-container">
            <span className="details-type">{test.testName}</span>

            {/* Tab Buttons */}
            <div className="details-buttons-row-align-left">
                <button
                    className={`details-btn ${activeTab === "details" ? "active" : ""}`}
                    onClick={() => setActiveTab("details")}
                >
                    Assessment Details
                </button>
                <button
                    className={`details-btn ${activeTab === "attempts" ? "active" : ""}`}
                    onClick={() => setActiveTab("attempts")}
                >
                    Previous Attempts
                </button>
            </div>

            {/* Assessment Details Tab */}
            {activeTab === "details" && (
                <div>
                    <div className="details-table-container">
                        <table className="details-table">
                            <thead>
                                <tr className="details-top-row">
                                    <th>#</th>
                                    <th>MODULE</th>
                                    <th>QUESTIONS</th>
                                    <th>MAX MARKS</th>
                                    <th>DURATION</th>
                                    <th>Negative</th>
                                </tr>
                            </thead>
                            <tbody>
                                {test.sections && test.sections.map((section, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{section.name}</td>
                                        <td>{section.questions}</td>
                                        <td>{section.marks}</td>
                                        <td>{section.time}&nbsp;mins</td>
                                        <td>
                                            {section.NegativeMark ? section.NegativeMark : <img src={Negative} alt="negative" className="details-negative-icon" />}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="details-duration-section">
                        <table className="details-duration-table">
                            <tbody>
                                <tr>
                                    <td className="details-duration-label">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        &nbsp;Duration
                                    </td>
                                    <td className="details-duration-time">{test.time}&nbsp;mins</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        {hasAttempted ? (
                            <div className="details-error-info">
                                <p>You have already attempted this test.</p>
                                <p>Click on <strong>Previous Attempts</strong> tab to view your attempt details.</p>
                            </div>
                        ) : (
                            <>
                                <div className="details-info">
                                    <p>You can attempt this assessment only<span>1</span> once.</p>
                                </div>
                                <button className="details-start-btn" onClick={handleStartButtonClick}>
                                    {isLoggedIn ? 'Start Assessment' : 'Login to Start Assessment'}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Previous Attempts Tab */}
            {activeTab === "attempts" && (
                <div className="previous-attempts-container">
                    {isLoadingAttempts ? (
                        <p>Loading previous attempts...</p>
                    ) : hasAttempted ? (
                        previousAttempts.map((attempt) => (
                            <div key={attempt.resultId} className="attempt-card">
                                <div>
                                    <p><b>Attempted on:</b> {new Date(attempt.submittedAt).toLocaleString()}</p>
                                    <p><b>Percentage:</b> {attempt.overallPercentage.toFixed(2)}%</p>
                                    <p><b>Status:</b> {attempt.status}</p>
                                </div>
                                <button
                                    className="details-view-results-btn"
                                    onClick={handleViewResultClick}
                                >
                                    View Results
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="Noprevious">
                            <img src={Noresults} alt="info" className="no-attempts-img" />
                            <p>There are no previous attempts!&nbsp;<span>Attempt now</span></p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AssessmentDetails;