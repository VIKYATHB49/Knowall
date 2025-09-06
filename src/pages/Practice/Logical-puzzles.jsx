// src/pages/Practice/Logical-puzzles.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const logicalPuzzlesTests = [
  {
    testName: "Logical Puzzles Test - 1",
    questions: 10,
    slug: "logical-puzzles-test-1",
    fileName: "logical-puzzles-1",
    level: "Medium",
    sections: [{ name: "Logical Puzzles Test - 1", questions: 10 }]
  },
  {
    testName: "Logical Puzzles Test - 2",
    questions: 10,
    slug: "logical-puzzles-test-2",
    fileName: "logical-puzzles-2",
    level: "Hard",
    sections: [{ name: "Logical Puzzles Test - 2", questions: 10 }]
  },
];

const LogicalPuzzles = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/logical-puzzles/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Logical Puzzles</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {logicalPuzzlesTests.map((test, index) => (
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

export default LogicalPuzzles;
