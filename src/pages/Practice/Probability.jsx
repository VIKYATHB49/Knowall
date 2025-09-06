// src/pages/Practice/Probability.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const probabilityTests = [
  {
    testName: "Probability Test - 1",
    questions: 10,
    slug: "probability-test-1",
    fileName: "probability-1",
    level: "Easy",
    sections: [{ name: "Probability Test - 1", questions: 10 }]
  },
  {
    testName: "Probability Test - 2",
    questions: 10,
    slug: "probability-test-2",
    fileName: "probability-2",
    level: "Medium",
    sections: [{ name: "Probability Test - 2", questions: 10 }]
  },
  {
    testName: "Probability Test - 3",
    questions: 10,
    slug: "probability-test-3",
    fileName: "probability-3",
    level: "Hard",
    sections: [{ name: "Probability Test - 3", questions: 10 }]
  },
];

const Probability = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/probability/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Probability</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {probabilityTests.map((test, index) => (
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

export default Probability;
