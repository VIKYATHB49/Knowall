import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/PracticeResult.css';
import Pass from '../assets/images/Pass.png';
import Fail from '../assets/images/Fail.png';

const PracticeResult = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const storedData = sessionStorage.getItem('practiceResultData');
    const stateData = location.state;
    const resultData = stateData || (storedData ? JSON.parse(storedData) : null);
    const { test, answers, timeSpentSec } = resultData || {};

    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        const handleBackButton = () => {
            window.history.pushState(null, "", window.location.href);
        };
        window.addEventListener("popstate", handleBackButton);
        return () => {
            window.removeEventListener("popstate", handleBackButton);
            sessionStorage.removeItem('practiceResultData');
            if (test && test.fileName) {
                const testId = test.fileName;
                localStorage.removeItem(`timeSpent_${testId}`);
                localStorage.removeItem(`answers_${testId}`);
                localStorage.removeItem(`currentIndex_${testId}`);
            }
        };
    }, [test]);

    const results = useMemo(() => {
        if (!test || !answers) {
            return {
                totalQuestions: 0, attempted: 0, correct: 0, wrong: 0,
                accuracy: 0, sectionName: 'N/A'
            };
        }

        const section = test.sections[0];
        const userAnswers = answers[section.name] || [];
        const questions = section.questions || [];

        let correctCount = 0;
        let attemptedCount = 0;

        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer !== null && userAnswer !== undefined) {
                attemptedCount++;
                if (userAnswer === question.correctOptionIndex) {
                    correctCount++;
                }
            }
        });

        const wrongCount = attemptedCount - correctCount;
        const accuracy = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;
        
        return {
            totalQuestions: questions.length,
            attempted: attemptedCount,
            correct: correctCount,
            wrong: wrongCount,
            accuracy: accuracy,
            sectionName: section.name,
        };
    }, [test, answers]);

    const formatTime = (seconds = 0) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} Min ${remainingSeconds} Sec`;
    };

    if (!resultData) {
        return (
            <div className="practice-result-page-container">
                <div className="practice-result-card-centered">
                    <h1>No Result Data</h1>
                    <p>Please complete a test to see your results.</p>
                    <button onClick={() => navigate('/')} className="practice-home-button">Go to Home</button>
                </div>
            </div>
        );
    }

    const isSuccess = results.accuracy >= 60;
    
    return (
        <div className="practice-result-page-container">
            <div className="practice-result-card">
                <main className="practice-result-body">
                    <div className="practice-result-left">
                        <h1>{test.testName}</h1>
                        
                        <div className="practice-stats-grid">
                            <div className="practice-stat-item">
                                <span className="practice-stat-label">Time Spent</span>
                                <span className="practice-stat-value">{formatTime(timeSpentSec)}</span>
                            </div>
                            <div className="practice-stat-item">
                                <span className="practice-stat-label">Marks</span>
                                <span className="practice-stat-value">{results.correct} / {results.totalQuestions}</span>
                            </div>
                            <div className="practice-stat-item">
                                <span className="practice-stat-label">Percentage</span>
                                <span className="practice-stat-value">{results.accuracy.toFixed(2)}%</span>
                            </div>
                            <div className="practice-stat-item">
                                <span className="practice-stat-label">Accuracy</span>
                                <span className="practice-stat-value">{results.accuracy.toFixed(2)}%</span>
                            </div>
                            <div className="practice-stat-item">
                                <span className="practice-stat-label">Status</span>
                                <span className="practice-stat-value">{isSuccess ? 'Qualified' : 'Not Qualified'}</span>
                            </div>
                            <div className="practice-stat-item">
                                <span className="practice-stat-label">Qualifying %</span>
                                <span className="practice-stat-value">60.00%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="practice-result-right">
                        <div className="practice-image-container">
                            <img 
                                src={isSuccess ? Pass : Fail} 
                                alt={isSuccess ? "Success" : "Failure"} 
                                className="practice-result-image" 
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PracticeResult;