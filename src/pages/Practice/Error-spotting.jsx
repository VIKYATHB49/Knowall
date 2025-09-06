// src/pages/Practice/Error-spotting.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const errorSpottingTests = [
  {
    testName: "Error Spotting Test - 1",
    questions: 10,
    slug: "error-spotting-test-1",
    fileName: "error-spotting-1",
    level: "Easy",
    sections: [{ name: "Error Spotting Test - 1", questions: 10 }]
  },
  {
    testName: "Error Spotting Test - 2",
    questions: 10,
    slug: "error-spotting-test-2",
    fileName: "error-spotting-2",
    level: "Medium",
    sections: [{ name: "Error Spotting Test - 2", questions: 10 }]
  },
  {
    testName: "Error Spotting Test - 3",
    questions: 10,
    slug: "error-spotting-test-3",
    fileName: "error-spotting-3",
    level: "Hard",
    sections: [{ name: "Error Spotting Test - 3", questions: 10 }]
  },
];

const ErrorSpotting = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/error-spotting/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Error Spotting</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {errorSpottingTests.map((test, index) => (
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

export default ErrorSpotting;
