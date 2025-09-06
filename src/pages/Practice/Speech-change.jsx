// src/pages/Practice/Speech-change.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const speechChangeTests = [
  {
    testName: "Speech Change Test - 1",
    questions: 10,
    slug: "speech-change-test-1",
    fileName: "speech-change-1",
    level: "Easy",
    sections: [{ name: "Speech Change Test - 1", questions: 10 }]
  },
  {
    testName: "Speech Change Test - 2",
    questions: 10,
    slug: "speech-change-test-2",
    fileName: "speech-change-2",
    level: "Medium",
    sections: [{ name: "Speech Change Test - 2", questions: 10 }]
  },
  {
    testName: "Speech Change Test - 3",
    questions: 10,
    slug: "speech-change-test-3",
    fileName: "speech-change-3",
    level: "Hard",
    sections: [{ name: "Speech Change Test - 3", questions: 10 }]
  },
];

const SpeechChange = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/speech-change/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Speech Change</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {speechChangeTests.map((test, index) => (
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

export default SpeechChange;
