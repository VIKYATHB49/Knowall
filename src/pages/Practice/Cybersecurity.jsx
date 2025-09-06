// src/pages/Practice/Cybersecurity.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const cyberTests = [
  {
    testName: "Cybersecurity Awareness Test",
    questions: 15,
    slug: "cybersecurity-awareness-test",
    fileName: "cybersecurity-awareness",
    level: "Easy",
    sections: [{ name: "Cybersecurity Awareness", questions: 15 }]
  },
  {
    testName: "Cybersecurity Advanced Test",
    questions: 20,
    slug: "cybersecurity-advanced-test",
    fileName: "cybersecurity-advanced",
    level: "Hard",
    sections: [{ name: "Cybersecurity Advanced", questions: 20 }]
  }
];

const CyberSecurity = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/cybersecurity/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Cybersecurity</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {cyberTests.map((test, index) => (
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

export default CyberSecurity;
