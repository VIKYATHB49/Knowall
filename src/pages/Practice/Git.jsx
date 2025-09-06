// src/pages/Practice/Git.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const gitTests = [
  {
    testName: "Git Version Control Test",
    questions: 10,
    slug: "git-version-control-test",
    fileName: "git-version-control",
    level: "Medium",
    sections: [{ name: "Git Version Control", questions: 10 }]
  }
];

const GitVersionControl = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/git/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Git Version Control</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {gitTests.map((test, index) => (
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

export default GitVersionControl;
