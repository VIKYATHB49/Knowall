// src/pages/Practice/Se-models.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const seTests = [
  {
    testName: "Software Engineering Models Test - 1",
    questions: 10,
    slug: "se-models-test-1",
    fileName: "se-models-1",
    level: "Easy",
    sections: [{ name: "SE Models Test - 1", questions: 10 }]
  },
  {
    testName: "Software Engineering Models Test - 2",
    questions: 14,
    slug: "se-models-test-2",
    fileName: "se-models-2",
    level: "Medium",
    sections: [{ name: "SE Models Test - 2", questions: 14 }]
  }
];

const SoftwareEngineering = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/se-models/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Software Engineering</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {seTests.map((test, index) => (
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

export default SoftwareEngineering;
