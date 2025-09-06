// src/pages/Practice/Sorting.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const sortingTests = [
  {
    testName: "Sorting Basics",
    questions: 12,
    slug: "sorting-basics",
    fileName: "sorting-basics",
    level: "Easy",
    sections: [{ name: "Sorting Basics", questions: 12 }]
  },
  {
    testName: "Advanced Sorting Algorithms",
    questions: 18,
    slug: "sorting-advanced",
    fileName: "sorting-advanced",
    level: "Hard",
    sections: [{ name: "Advanced Sorting Algorithms", questions: 18 }]
  }
];

const SortingAlgorithms = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/sorting/practice-exam", { state: test });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Sorting Algorithms</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {sortingTests.map((test, index) => (
          <div className="PracticeTest-logical-card" key={index}>
            <div className="PracticeTest-logical-card-header">
              <span className="PracticeTest-test-tag">Mcq</span>
              <h3 className="PracticeTest-test-name">{test.testName}</h3>
            </div>
            <div className="PracticeTest-logical-card-body">
              <span className="PracticeTest-logical-light">
                Questions: {test.questions}
              </span>
              <span className={`PracticeTest-test-level PracticeTest-level-${test.level.toLowerCase()}`}>
                {test.level}
              </span>
            </div>
            <div className="PracticeTest-start-button-container">
              <button className="PracticeTest-start-button" onClick={() => handleStart(test)}>Start</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingAlgorithms;
