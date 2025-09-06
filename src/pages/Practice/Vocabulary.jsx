// src/pages/Practice/Vocabulary.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const vocabularyTests = [
  {
    testName: "Vocabulary Test - 1",
    questions: 10,
    slug: "vocabulary-test-1",
    fileName: "vocabulary-1",
    level: "Easy",
    sections: [{ name: "Vocabulary Test - 1", questions: 10 }]
  },
  {
    testName: "Vocabulary Test - 2",
    questions: 10,
    slug: "vocabulary-test-2",
    fileName: "vocabulary-2",
    level: "Medium",
    sections: [{ name: "Vocabulary Test - 2", questions: 10 }]
  },
];

const VocabularyTest = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/vocabulary/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Vocabulary Test</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {vocabularyTests.map((test, index) => (
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

export default VocabularyTest;
