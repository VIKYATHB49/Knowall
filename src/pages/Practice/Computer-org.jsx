// src/pages/Practice/Computer-org.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const compOrgTests = [
  {
    testName: "Computer Organization Basics Test",
    questions: 12,
    slug: "computer-organization-basics-test",
    fileName: "computer-organization-basics",
    level: "Easy",
    sections: [{ name: "Computer Organization Basics", questions: 12 }]
  },
  {
    testName: "Computer Organization Advanced Test",
    questions: 16,
    slug: "computer-organization-advanced-test",
    fileName: "computer-organization-advanced",
    level: "Hard",
    sections: [{ name: "Computer Organization Advanced", questions: 16 }]
  }
];

const ComputerOrganization = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/computer-org/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Computer Organization</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {compOrgTests.map((test, index) => (
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

export default ComputerOrganization;
