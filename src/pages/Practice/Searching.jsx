// src/pages/Practice/Searching.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const searchingTests = [
  {
    testName: "Searching Algorithms Test",
    questions: 15,
    slug: "searching-algorithms",
    fileName: "searching-algorithms",
    level: "Medium",
    sections: [{ name: "Searching Algorithms", questions: 15 }]
  }
];

const SearchingAlgorithms = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/searching/practice-exam", { state: test });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Searching Algorithms</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {searchingTests.map((test, index) => (
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

export default SearchingAlgorithms;
