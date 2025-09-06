// src/pages/Practice/Series-completion.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const seriesCompletionTests = [
  {
    testName: "Series Completion Test - 1",
    questions: 10,
    slug: "series-completion-test-1",
    fileName: "series-completion-1",
    level: "Easy",
    sections: [{ name: "Series Completion Test - 1", questions: 10 }]
  },
  {
    testName: "Series Completion Test - 2",
    questions: 10,
    slug: "series-completion-test-2",
    fileName: "series-completion-2",
    level: "Medium",
    sections: [{ name: "Series Completion Test - 2", questions: 10 }]
  },
  {
    testName: "Series Completion Test - 3",
    questions: 10,
    slug: "series-completion-test-3",
    fileName: "series-completion-3",
    level: "Hard",
    sections: [{ name: "Series Completion Test - 3", questions: 10 }]
  },
];

const SeriesCompletion = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/series-completion/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Series Completion</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {seriesCompletionTests.map((test, index) => (
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

export default SeriesCompletion;
