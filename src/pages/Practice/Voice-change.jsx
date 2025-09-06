// src/pages/Practice/Voice-change.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const voiceChangeTests = [
  {
    testName: "Voice Change Test - 1",
    questions: 10,
    slug: "voice-change-test-1",
    fileName: "voice-change-1",
    level: "Easy",
    sections: [{ name: "Voice Change Test - 1", questions: 10 }]
  },
  {
    testName: "Voice Change Test - 2",
    questions: 10,
    slug: "voice-change-test-2",
    fileName: "voice-change-2",
    level: "Medium",
    sections: [{ name: "Voice Change Test - 2", questions: 10 }]
  },
];

const VoiceChange = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/voice-change/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Voice Change</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {voiceChangeTests.map((test, index) => (
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

export default VoiceChange;
