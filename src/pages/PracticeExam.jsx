import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PracticeHeader from '../components/PracticeHeader.jsx';
import PracticeQuestionArea from '../components/PracticeQuestionArea.jsx';
import PracticeFooter from '../components/PracticeFooter.jsx';
import PracticeNavigation from '../components/PracticeNavigation.jsx';
import '../assets/css/PracticeExam.css';
import openIcon from '../assets/images/Open.png';
import closeIcon from '../assets/images/Close.png';
import Navbar from '../components/Navbar';

const testModules = import.meta.glob('/src/data/Practice/*.js');

const PracticeExam = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [test, setTest] = useState(null);
    const [navOpen, setNavOpen] = useState(false);
    const testId = location.state?.fileName || 'default-test';

    const [currentIndex, setCurrentIndex] = useState(() => {
        const savedIndex = localStorage.getItem(`currentIndex_${testId}`);
        return savedIndex ? parseInt(savedIndex, 10) : 0;
    });

    const [answers, setAnswers] = useState(() => {
        const savedAnswers = localStorage.getItem(`answers_${testId}`);
        return savedAnswers ? JSON.parse(savedAnswers) : [];
    });
    
    const [timeSpent, setTimeSpent] = useState(() => {
        const savedTime = localStorage.getItem(`timeSpent_${testId}`);
        return savedTime ? parseInt(savedTime, 10) : 0;
    });
    
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [accuracy, setAccuracy] = useState(0);

    useEffect(() => {
        const testDetails = location.state;
        if (!testDetails || !testDetails.fileName) {
            navigate(-1);
            return;
        }
        const loadTestData = async () => {
            const path = `/src/data/Practice/${testDetails.fileName}.js`;
            if (testModules[path]) {
                try {
                    const module = await testModules[path]();
                    const data = module.default;
                    const processedData = {
                        ...data,
                        sections: data.sections.map((section) => ({
                            ...section,
                            questions: section.questions.map((question) => ({
                                ...question,
                                correctOptionIndex: question.options.findIndex(
                                    (option) => option.value === question.correctAnswer.value
                                ),
                            })),
                        })),
                    };
                    setTest(processedData);
                    const questionsLength = processedData.sections[0].questions.length;
                    setAnswers((prevAnswers) => {
                        const initialAnswers = prevAnswers.length === questionsLength ? prevAnswers : Array(questionsLength).fill(null);
                        const savedIndex = parseInt(localStorage.getItem(`currentIndex_${testId}`), 10) || 0;
                        const currentAnswer = initialAnswers[savedIndex];
                        setIsTimerRunning(currentAnswer === null || currentAnswer === undefined);
                        return initialAnswers;
                    });
                } catch (error) {
                    console.error('Failed to load test data:', error);
                    navigate(-1);
                }
            } else {
                console.error(`Test data file not found: ${path}`);
                navigate(-1);
            }
        };
        loadTestData();
    }, [location.state, navigate, testId]);

    useEffect(() => {
        localStorage.setItem(`currentIndex_${testId}`, currentIndex);
        const currentAnswer = answers[currentIndex];
        setIsTimerRunning(currentAnswer === null || currentAnswer === undefined);
    }, [currentIndex, testId, answers]);

    useEffect(() => {
        let timerId;
        if (isTimerRunning) {
            timerId = setInterval(() => {
                setTimeSpent((prev) => {
                    const newTime = prev + 1;
                    localStorage.setItem(`timeSpent_${testId}`, newTime);
                    return newTime;
                });
            }, 1000);
        }
        return () => clearInterval(timerId);
    }, [isTimerRunning, testId]);

    useEffect(() => {
        if (!test || answers.length === 0) return;
        const questions = test.sections[0].questions;
        const answeredCount = answers.filter((ans) => ans !== null).length;
        if (answeredCount === 0) {
            setAccuracy(0);
            return;
        }
        let correctCount = 0;
        answers.forEach((answer, index) => {
            if (answer !== null && questions[index].correctOptionIndex === answer) {
                correctCount++;
            }
        });
        setAccuracy(Math.round((correctCount / answeredCount) * 100));
    }, [answers, test]);

    const handleOptionChange = (questionIndex, optionIndex) => {
        if (answers[questionIndex] !== null) return;
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = optionIndex;
        setAnswers(updatedAnswers);
        localStorage.setItem(`answers_${testId}`, JSON.stringify(updatedAnswers));
        setIsTimerRunning(false);
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (test && currentIndex < test.sections[0].questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleMainSubmitClick = () => {
        setIsTimerRunning(false);
        const sectionName = test.sections[0].name;
        const resultData = {
            test: test,
            answers: { [sectionName]: answers },
            timeSpentSec: timeSpent,
            violations: 0,
            isAutoSubmitted: false,
        };

        sessionStorage.setItem('practiceResultData', JSON.stringify(resultData));

        navigate(location.pathname + '/results', {
            replace: true,
            state: resultData,
        });
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${hours}:${mins}:${secs}`;
    };

    if (!test) {
        return (
            <div className="Practice-layout">
                <div className="Practice-main"><p>Loading test...</p></div>
            </div>
        );
    }

    const currentSection = test.sections[0];
    const currentQuestion = currentSection.questions[currentIndex];
    const isCurrentQuestionAnswered = answers[currentIndex] !== null && answers[currentIndex] !== undefined;

    return (
        <div>
            <Navbar />
            <div className={`Practice-layout ${navOpen ? 'Practice-nav-open' : ''}`}>
                {navOpen && <div className="Practice-nav-backdrop" onClick={() => setNavOpen(false)}></div>}
                
                <div className="Practice-main">
                    <PracticeHeader liveTime={formatTime(timeSpent)} sectionName={currentSection.name} />
                    <PracticeQuestionArea
                        key={currentIndex}
                        question={currentQuestion}
                        currentIndex={currentIndex}
                        userAnswer={answers[currentIndex]}
                        handleOptionChange={handleOptionChange}
                    />
<PracticeFooter
  onPrev={handlePrev}
  onNext={handleNext}
  isFirst={currentIndex === 0}
  isLast={currentIndex === currentSection.questions.length - 1}
  onSubmit={handleMainSubmitClick}
  isNextDisabled={!isCurrentQuestionAnswered && currentIndex < currentSection.questions.length - 1}
  isSubmitDisabled={!isCurrentQuestionAnswered}
/>
                </div>
                <div className={`Practice-nav ${navOpen ? 'Practice-open' : ''}`}>
                    <PracticeNavigation accuracy={accuracy} />
                </div>
                <button className="Practice-open-navigator-btn" onClick={() => setNavOpen(!navOpen)}>
                    <img src={navOpen ? closeIcon : openIcon} alt={navOpen ? "Close" : "Open"} className="Practice-nav-toggle-icon" />
                </button>
            </div>
        </div>
    );
};

export default PracticeExam;