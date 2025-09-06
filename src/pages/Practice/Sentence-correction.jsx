// src/pages/Practice/Sentence-correction.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const sentenceCorrectionTests = [
  {
    testName: "Sentence Correction Test - 1",
    questions: 10,
    slug: "sentence-correction-test-1",
    fileName: "sentence-correction-1",
    level: "Easy",
    sections: [{ name: "Sentence Correction Test - 1", questions: 10 }]
  },
  {
    testName: "Sentence Correction Test - 2",
    questions: 10,
    slug: "sentence-correction-test-2",
    fileName: "sentence-correction-2",
    level: "Medium",
    sections: [{ name: "Sentence Correction Test - 2", questions: 10 }]
  },
  {
    testName: "Sentence Correction Test - 3",
    questions: 10,
    slug: "sentence-correction-test-3",
    fileName: "sentence-correction-3",
    level: "Hard",
    sections: [{ name: "Sentence Correction Test - 3", questions: 10 }]
  },
];

const SentenceCorrection = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/sentence-correction/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Sentence Correction</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {sentenceCorrectionTests.map((test, index) => (
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

export default SentenceCorrection;
