// src/pages/Practice/Reactjs.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const reactJsTests = [
  {
    testName: "ReactJS Fundamentals Test",
    questions: 12,
    slug: "reactjs-fundamentals-test",
    fileName: "reactjs-fundamentals",
    level: "Easy",
    sections: [{ name: "ReactJS Fundamentals", questions: 12 }]
  },
  {
    testName: "ReactJS Advanced Concepts Test",
    questions: 15,
    slug: "reactjs-advanced-test",
    fileName: "reactjs-advanced",
    level: "Hard",
    sections: [{ name: "ReactJS Advanced Concepts", questions: 15 }]
  }
];

const ReactJsMCQs = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/reactjs/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>ReactJS</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {reactJsTests.map((test, index) => (
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

export default ReactJsMCQs;
