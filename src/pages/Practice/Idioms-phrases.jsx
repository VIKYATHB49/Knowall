// src/pages/Practice/Idioms-phrases.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const idiomsPhrasesTests = [
  {
    testName: "Idioms & Phrases Test - 1",
    questions: 10,
    slug: "idioms-phrases-test-1",
    fileName: "idioms-phrases-1",
    level: "Easy",
    sections: [{ name: "Idioms & Phrases Test - 1", questions: 10 }]
  },
  {
    testName: "Idioms & Phrases Test - 2",
    questions: 10,
    slug: "idioms-phrases-test-2",
    fileName: "idioms-phrases-2",
    level: "Medium",
    sections: [{ name: "Idioms & Phrases Test - 2", questions: 10 }]
  },
];

const IdiomsAndPhrases = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/idioms-phrases/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Idioms & Phrases</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {idiomsPhrasesTests.map((test, index) => (
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

export default IdiomsAndPhrases;
