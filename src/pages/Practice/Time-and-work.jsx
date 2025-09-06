// src/pages/Practice/Time-and-work.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const timeAndWorkTests = [
  {
    testName: "Time and Work Test - 1",
    questions: 10,
    slug: "time-and-work-test-1",
    fileName: "time-and-work-1",
    level: "Easy",
    sections: [{ name: "Time and Work Test - 1", questions: 10 }]
  },
  {
    testName: "Time and Work Test - 2",
    questions: 10,
    slug: "time-and-work-test-2",
    fileName: "time-and-work-2",
    level: "Medium",
    sections: [{ name: "Time and Work Test - 2", questions: 10 }]
  },
  {
    testName: "Time and Work Test - 3",
    questions: 10,
    slug: "time-and-work-test-3",
    fileName: "time-and-work-3",
    level: "Hard",
    sections: [{ name: "Time and Work Test - 3", questions: 10 }]
  },
];

const TimeAndWork = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/time-and-work/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Time and Work</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {timeAndWorkTests.map((test, index) => (
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

export default TimeAndWork;
