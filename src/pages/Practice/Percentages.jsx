// src/pages/Practice/Percentages.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const percentagesTests = [
  {
    testName: "Percentages Test - 1",
    questions: 10,
    slug: "percentages-test-1",
    fileName: "percentages-1",
    level: "Easy",
    sections: [{ name: "Percentages Test - 1", questions: 10 }]
  },
  {
    testName: "Percentages Test - 2",
    questions: 10,
    slug: "percentages-test-2",
    fileName: "percentages-2",
    level: "Medium",
    sections: [{ name: "Percentages Test - 2", questions: 10 }]
  },
  {
    testName: "Percentages Test - 3",
    questions: 10,
    slug: "percentages-test-3",
    fileName: "percentages-3",
    level: "Hard",
    sections: [{ name: "Percentages Test - 3", questions: 10 }]
  },
];

const Percentages = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/percentages/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Percentages</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {percentagesTests.map((test, index) => (
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

export default Percentages;
