// src/pages/Practice/Para-jumbles.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const paraJumblesTests = [
  {
    testName: "Para Jumbles Test - 1",
    questions: 10,
    slug: "para-jumbles-test-1",
    fileName: "para-jumbles-1",
    level: "Easy",
    sections: [{ name: "Para Jumbles Test - 1", questions: 10 }]
  },
  {
    testName: "Para Jumbles Test - 2",
    questions: 10,
    slug: "para-jumbles-test-2",
    fileName: "para-jumbles-2",
    level: "Medium",
    sections: [{ name: "Para Jumbles Test - 2", questions: 10 }]
  },
  {
    testName: "Para Jumbles Test - 3",
    questions: 10,
    slug: "para-jumbles-test-3",
    fileName: "para-jumbles-3",
    level: "Hard",
    sections: [{ name: "Para Jumbles Test - 3", questions: 10 }]
  },
];

const ParaJumbles = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/para-jumbles/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Para Jumbles</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {paraJumblesTests.map((test, index) => (
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

export default ParaJumbles;
