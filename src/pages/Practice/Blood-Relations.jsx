// src/pages/Practice/Blood-Relations.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const bloodRelationsTests = [
  {
    testName: "Blood Relations Test - 1",
    questions: 10,
    slug: "blood-relations-test-1",
    fileName: "blood-relations-1",
    level: "Easy",
    sections: [{ name: "Blood Relations Test - 1", questions: 10 }]
  },
  {
    testName: "Blood Relations Test - 2",
    questions: 10,
    slug: "blood-relations-test-2",
    fileName: "blood-relations-2",
    level: "Medium",
    sections: [{ name: "Blood Relations Test - 2", questions: 10 }]
  },
  {
    testName: "Blood Relations Test - 3",
    questions: 10,
    slug: "blood-relations-test-3",
    fileName: "blood-relations-3",
    level: "Hard",
    sections: [{ name: "Blood Relations Test - 3", questions: 10 }]
  },
];

const BloodRelations = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/blood-relations/practice-exam", {
      state: test, // ✅ pass test object directly
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Blood Relations</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {bloodRelationsTests.map((test, index) => (
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

export default BloodRelations;
