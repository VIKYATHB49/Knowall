// src/pages/Practice/Permutations.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const permutationsTests = [
  {
    testName: "Permutations Test - 1",
    questions: 10,
    slug: "permutations-test-1",
    fileName: "permutations-1",
    level: "Easy",
    sections: [{ name: "Permutations Test - 1", questions: 10 }]
  },
  {
    testName: "Permutations Test - 2",
    questions: 10,
    slug: "permutations-test-2",
    fileName: "permutations-2",
    level: "Medium",
    sections: [{ name: "Permutations Test - 2", questions: 10 }]
  },
  {
    testName: "Permutations Test - 3",
    questions: 10,
    slug: "permutations-test-3",
    fileName: "permutations-3",
    level: "Hard",
    sections: [{ name: "Permutations Test - 3", questions: 10 }]
  },
];

const Permutations = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/permutations/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Permutations</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {permutationsTests.map((test, index) => (
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

export default Permutations;
