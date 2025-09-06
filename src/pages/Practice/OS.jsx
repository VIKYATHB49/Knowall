// src/pages/Practice/OS.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const osTests = [
  {
    testName: "Operating System Basics Test",
    questions: 12,
    slug: "os-basics-test",
    fileName: "os-basics",
    level: "Easy",
    sections: [{ name: "OS Basics", questions: 12 }]
  },
  {
    testName: "Operating System Advanced Test",
    questions: 15,
    slug: "os-advanced-test",
    fileName: "os-advanced",
    level: "Hard",
    sections: [{ name: "OS Advanced", questions: 15 }]
  }
];

const OSDecided = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/os/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Operating System</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {osTests.map((test, index) => (
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

export default OSDecided;
