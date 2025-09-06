// src/pages/Practice/Interest.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const interestTests = [
  {
    testName: "Simple & Compound Interest Test - 1",
    questions: 10,
    slug: "interest-test-1",
    fileName: "interest-1",
    level: "Easy",
    sections: [{ name: "Simple & Compound Interest Test - 1", questions: 10 }]
  },
  {
    testName: "Simple & Compound Interest Test - 2",
    questions: 10,
    slug: "interest-test-2",
    fileName: "interest-2",
    level: "Medium",
    sections: [{ name: "Simple & Compound Interest Test - 2", questions: 10 }]
  },
  {
    testName: "Simple & Compound Interest Test - 3",
    questions: 10,
    slug: "interest-test-3",
    fileName: "interest-3",
    level: "Hard",
    sections: [{ name: "Simple & Compound Interest Test - 3", questions: 10 }]
  },
];

const Interest = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/interest/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Simple & Compound Interest</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {interestTests.map((test, index) => (
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

export default Interest;
