// src/pages/Practice/Synonyms-antonyms.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const synonymsAntonymsTests = [
  {
    testName: "Synonyms & Antonyms Test - 1",
    questions: 10,
    slug: "synonyms-antonyms-test-1",
    fileName: "synonyms-antonyms-1",
    level: "Easy",
    sections: [{ name: "Synonyms & Antonyms Test - 1", questions: 10 }]
  },
  {
    testName: "Synonyms & Antonyms Test - 2",
    questions: 10,
    slug: "synonyms-antonyms-test-2",
    fileName: "synonyms-antonyms-2",
    level: "Medium",
    sections: [{ name: "Synonyms & Antonyms Test - 2", questions: 10 }]
  },
];

const SynonymsAntonyms = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/synonyms-antonyms/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Synonyms & Antonyms</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {synonymsAntonymsTests.map((test, index) => (
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

export default SynonymsAntonyms;
