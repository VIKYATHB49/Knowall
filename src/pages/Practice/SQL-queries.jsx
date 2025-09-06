// src/pages/Practice/SQL-queries.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const sqlTests = [
  {
    testName: "SQL Queries Test - 1",
    questions: 15,
    slug: "sql-queries-test-1",
    fileName: "sql-queries-1",
    level: "Medium",
    sections: [{ name: "SQL Queries Test - 1", questions: 15 }]
  },
  {
    testName: "SQL Queries Test - 2",
    questions: 12,
    slug: "sql-queries-test-2",
    fileName: "sql-queries-2",
    level: "Hard",
    sections: [{ name: "SQL Queries Test - 2", questions: 12 }]
  }
];

const SQLQueries = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/sql-queries/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>SQL Queries</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {sqlTests.map((test, index) => (
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

export default SQLQueries;
