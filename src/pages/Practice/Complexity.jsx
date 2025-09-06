// src/pages/Practice/Complexity.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const complexityTests = [
  {
    testName: "Algorithm Complexity Basics",
    questions: 10,
    slug: "complexity-basics",
    fileName: "complexity-basics",
    level: "Easy",
    sections: [{ name: "Algorithm Complexity Basics", questions: 10 }]
  },
  {
    testName: "Time & Space Complexity Test",
    questions: 15,
    slug: "time-space-complexity",
    fileName: "time-space-complexity",
    level: "Medium",
    sections: [{ name: "Time & Space Complexity", questions: 15 }]
  }
];

const AlgorithmComplexity = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/complexity/practice-exam", { state: test });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Algorithm Complexity</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {complexityTests.map((test, index) => (
          <div className="PracticeTest-logical-card" key={index}>
            <div className="PracticeTest-logical-card-header">
              <span className="PracticeTest-test-tag">Mcq</span>
              <h3 className="PracticeTest-test-name">{test.testName}</h3>
            </div>
            <div className="PracticeTest-logical-card-body">
              <span className="PracticeTest-logical-light">
                Questions: {test.questions}
              </span>
              <span className={`PracticeTest-test-level PracticeTest-level-${test.level.toLowerCase()}`}>
                {test.level}
              </span>
            </div>
            <div className="PracticeTest-start-button-container">
              <button className="PracticeTest-start-button" onClick={() => handleStart(test)}>Start</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmComplexity;
