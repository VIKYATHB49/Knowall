// src/pages/Practice/Passage-comprehension.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const passageComprehensionTests = [
  {
    testName: "Passage Comprehension Test - 1",
    questions: 10,
    slug: "passage-comprehension-test-1",
    fileName: "passage-comprehension-1",
    level: "Easy",
    sections: [{ name: "Passage Comprehension Test - 1", questions: 10 }]
  },
  {
    testName: "Passage Comprehension Test - 2",
    questions: 10,
    slug: "passage-comprehension-test-2",
    fileName: "passage-comprehension-2",
    level: "Medium",
    sections: [{ name: "Passage Comprehension Test - 2", questions: 10 }]
  },
];

const PassageComprehension = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/passage-comprehension/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Passage Comprehension</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {passageComprehensionTests.map((test, index) => (
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

export default PassageComprehension;
