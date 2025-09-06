// src/pages/Practice/Fill-blanks.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const fillBlanksTests = [
  {
    testName: "Fill in the Blanks Test - 1",
    questions: 10,
    slug: "fill-blanks-test-1",
    fileName: "fill-blanks-1",
    level: "Easy",
    sections: [{ name: "Fill in the Blanks Test - 1", questions: 10 }]
  },
  {
    testName: "Fill in the Blanks Test - 2",
    questions: 10,
    slug: "fill-blanks-test-2",
    fileName: "fill-blanks-2",
    level: "Medium",
    sections: [{ name: "Fill in the Blanks Test - 2", questions: 10 }]
  },
  {
    testName: "Fill in the Blanks Test - 3",
    questions: 10,
    slug: "fill-blanks-test-3",
    fileName: "fill-blanks-3",
    level: "Hard",
    sections: [{ name: "Fill in the Blanks Test - 3", questions: 10 }]
  },
];

const FillBlanks = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/fill-blanks/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Fill in the Blanks</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {fillBlanksTests.map((test, index) => (
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

export default FillBlanks;
