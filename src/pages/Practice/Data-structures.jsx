// src/pages/Practice/Data-structures.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const dataStructuresTests = [
  {
    testName: "Data Structures Basics - 1",
    questions: 10,
    slug: "data-structures-basics-1",
    fileName: "data-structures-1",
    level: "Easy",
    sections: [{ name: "Data Structures Basics - 1", questions: 10 }]
  },
  {
    testName: "Data Structures LinkedList - 2",
    questions: 10,
    slug: "data-structures-linkedlist-2",
    fileName: "data-structures-2",
    level: "Medium",
    sections: [{ name: "Data Structures LinkedList - 2", questions: 10 }]
  },
  {
    testName: "Data Structures Trees - 3",
    questions: 10,
    slug: "data-structures-trees-3",
    fileName: "data-structures-3",
    level: "Hard",
    sections: [{ name: "Data Structures Trees - 3", questions: 10 }]
  },
];

const DataStructures = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/data-structures/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Data Structures</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {dataStructuresTests.map((test, index) => (
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

export default DataStructures;
