// src/pages/Practice/Boats-and-streams.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const boatsAndStreamsTests = [
  {
    testName: "Boats And Streams Test - 1",
    questions: 10,
    slug: "boats-and-streams-test-1",
    fileName: "boats-and-streams-1",
    level: "Easy",
    sections: [{ name: "Boats And Streams Test - 1", questions: 10 }]
  },
  {
    testName: "Boats And Streams Test - 2",
    questions: 10,
    slug: "boats-and-streams-test-2",
    fileName: "boats-and-streams-2",
    level: "Medium",
    sections: [{ name: "Boats And Streams Test - 2", questions: 10 }]
  },
  {
    testName: "Boats And Streams Test - 3",
    questions: 10,
    slug: "boats-and-streams-test-3",
    fileName: "boats-and-streams-3",
    level: "Hard",
    sections: [{ name: "Boats And Streams Test - 3", questions: 10 }]
  },
];

const BoatsAndStreams = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/boats-and-streams/practice-exam", {
      state: test, // ✅ pass test object directly
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Boats And Streams</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {boatsAndStreamsTests.map((test, index) => (
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

export default BoatsAndStreams;
