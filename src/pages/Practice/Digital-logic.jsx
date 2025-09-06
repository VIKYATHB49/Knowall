// src/pages/Practice/Digital-logic.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const digitalLogicTests = [
  {
    testName: "Digital Logic Test",
    questions: 20,
    slug: "digital-logic-test",
    fileName: "digital-logic",
    level: "Medium",
    sections: [{ name: "Digital Logic", questions: 20 }]
  }
];

const DigitalLogic = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/digital-logic/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Digital Logic</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {digitalLogicTests.map((test, index) => (
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

export default DigitalLogic;
