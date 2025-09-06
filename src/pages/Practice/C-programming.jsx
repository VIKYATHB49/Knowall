// src/pages/Practice/C-programming.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const cProgrammingTests = [
  {
    testName: "C Programming Basics - 1",
    questions: 10,
    slug: "c-programming-basics-1",
    fileName: "c-programming-1",
    level: "Easy",
    sections: [{ name: "C Programming Basics - 1", questions: 10 }]
  },
  {
    testName: "C Programming Pointers - 2",
    questions: 10,
    slug: "c-programming-pointers-2",
    fileName: "c-programming-2",
    level: "Medium",
    sections: [{ name: "C Programming Pointers - 2", questions: 10 }]
  },
  {
    testName: "C Programming Advanced - 3",
    questions: 10,
    slug: "c-programming-advanced-3",
    fileName: "c-programming-3",
    level: "Hard",
    sections: [{ name: "C Programming Advanced - 3", questions: 10 }]
  },
];

const CProgramming = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/c-programming/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>C Programming</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {cProgrammingTests.map((test, index) => (
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

export default CProgramming;
