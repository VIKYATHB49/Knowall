// src/pages/Practice/Python.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const pythonTests = [
  {
    testName: "Python Basics Test",
    questions: 12,
    slug: "python-basics-test",
    fileName: "python-basics",
    level: "Easy",
    sections: [{ name: "Python Basics", questions: 12 }]
  },
  {
    testName: "Python OOP Test",
    questions: 15,
    slug: "python-oop-test",
    fileName: "python-oop",
    level: "Medium",
    sections: [{ name: "Python OOP Concepts", questions: 15 }]
  }
];

const PythonPractice = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/python/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Python</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {pythonTests.map((test, index) => (
          <div className="PracticeTest-logical-card" key={index}>
            <div className="PracticeTest-logical-card-header">
              <span className="PracticeTest-test-tag">Mcq</span>
              <h3 className="PracticeTest-test-name">{test.testName}</h3>
            </div>
            <div className="PracticeTest-logical-card-body">
              <span className="PracticeTest-logical-light">
                Questions: {test.questions}
              </span>
              <span
                className={`PracticeTest-test-level PracticeTest-level-${test.level.toLowerCase()}`}
              >
                {test.level}
              </span>
            </div>
            <div className="PracticeTest-start-button-container">
              <button
                className="PracticeTest-start-button"
                onClick={() => handleStart(test)}
              >
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonPractice;
