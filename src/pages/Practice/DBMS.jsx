// src/pages/Practice/DBMS.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const dbmsTests = [
  {
    testName: "DBMS Concepts Test - 1",
    questions: 15,
    slug: "dbms-concepts-test-1",
    fileName: "dbms-concepts-1",
    level: "Easy",
    sections: [{ name: "DBMS Concepts Test - 1", questions: 15 }]
  },
  {
    testName: "DBMS Concepts Test - 2",
    questions: 20,
    slug: "dbms-concepts-test-2",
    fileName: "dbms-concepts-2",
    level: "Medium",
    sections: [{ name: "DBMS Concepts Test - 2", questions: 20 }]
  },
  {
    testName: "DBMS Concepts Test - 3",
    questions: 15,
    slug: "dbms-concepts-test-3",
    fileName: "dbms-concepts-3",
    level: "Hard",
    sections: [{ name: "DBMS Concepts Test - 3", questions: 15 }]
  }
];

const DBMSConcepts = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/dbms/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>DBMS Concepts</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {dbmsTests.map((test, index) => (
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

export default DBMSConcepts;
