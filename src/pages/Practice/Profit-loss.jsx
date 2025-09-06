// src/pages/Practice/Profit-loss.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const profitLossTests = [
  {
    testName: "Profit and Loss Test - 1",
    questions: 10,
    slug: "profit-loss-test-1",
    fileName: "profit-loss-1",
    level: "Easy",
    sections: [{ name: "Profit and Loss Test - 1", questions: 10 }]
  },
  {
    testName: "Profit and Loss Test - 2",
    questions: 10,
    slug: "profit-loss-test-2",
    fileName: "profit-loss-2",
    level: "Medium",
    sections: [{ name: "Profit and Loss Test - 2", questions: 10 }]
  },
  {
    testName: "Profit and Loss Test - 3",
    questions: 10,
    slug: "profit-loss-test-3",
    fileName: "profit-loss-3",
    level: "Hard",
    sections: [{ name: "Profit and Loss Test - 3", questions: 10 }]
  },
];

const ProfitLoss = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/profit-loss/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Profit and Loss</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {profitLossTests.map((test, index) => (
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

export default ProfitLoss;
