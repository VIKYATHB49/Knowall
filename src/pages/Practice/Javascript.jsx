// src/pages/Practice/Javascript.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const javascriptTests = [
  {
    testName: "JavaScript Basics Test",
    questions: 12,
    slug: "javascript-basics",
    fileName: "javascript-basics",
    level: "Easy",
    sections: [{ name: "JavaScript Basics", questions: 12 }]
  },
  {
    testName: "ES6+ Features Test",
    questions: 15,
    slug: "javascript-es6",
    fileName: "javascript-es6",
    level: "Medium",
    sections: [{ name: "ES6+ Features", questions: 15 }]
  },
  {
    testName: "Asynchronous JavaScript Test",
    questions: 18,
    slug: "javascript-async",
    fileName: "javascript-async",
    level: "Hard",
    sections: [{ name: "Async & Promises", questions: 18 }]
  }
];

const JavascriptPractice = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/javascript/practice-exam", { state: test });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>JavaScript</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {javascriptTests.map((test, index) => (
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

export default JavascriptPractice;
