// File: src/pages/InfosysAssessment.jsx
import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "12-AUG-2025",
    "questions": 60,
    "marks": 70,
    "time": 120,
    "testName": "Infosys_Test_2025_08_12",
    "fileName": "Infosys_Test_2025_08_12",
    "sections": [
        {
            "name": "Logical Ability",
            "time": 25,
            "questions": 15,
            "marks": 15,
            "PositiveMark": 1,
            "NegativeMark": 0
          },
          {
            "name": "Technical Ability",
            "time": 35,
            "questions": 10,
            "marks": 10,
            "PositiveMark": 1,
            "NegativeMark": 0
          },
          {
            "name": "Verbal",
            "time": 20,
            "questions": 20,
            "marks": 20,
            "PositiveMark": 1,
            "NegativeMark": 0
          },
          {
            "name": "Pseudo Code",
            "time": 10,
            "questions": 5,
            "marks": 10,
            "PositiveMark": 1,
            "NegativeMark": 0
          },
          {
            "name": "Puzzle Solving",
            "time": 10,
            "questions": 5,
            "marks": 5,
            "PositiveMark": 1,
            "NegativeMark": 0
          },
          {
            "name": "English Grammar",
            "time": 10,
            "questions": 5,
            "marks": 5,
            "PositiveMark": 1,
            "NegativeMark": 0
          },
          {
            "name": "English Writing",
            "time": 10,
            "questions": 1,
            "marks": 10,
            "PositiveMark": 10,
            "NegativeMark": 0
          }
    ]
  }
];

// helper to convert testName -> slug
const toSlug = (str) => str.replace(/_/g, '-').toLowerCase();

const InfosysAssessment = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    // ✅ This function is now cleaner. It just navigates with the new test data.
    // If a test is already in localStorage, starting a new one will simply overwrite it.
    const slug = toSlug(test.testName);
    navigate(`/assessments/infosys-assessment/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>Infosys Assessments</h2>
        <p>Here you find the Infosys placement assessments</p>
        <span className="logical-type">CST</span>
      </div>

      <div className="logical-grid">
        {testData.map((test, index) => (
          <div className="logical-card" key={index}>
            <div className="logical-card-content">
              <h3>{test.date}</h3>
              <hr />
              <p className="logical-light">Total Questions: {test.questions}</p>
              <p className="logical-light">Total Marks: {test.marks}</p>
              <p className="logical-light">Duration: {test.time}</p>

              <button
                className="logical-attempt-btn"
                onClick={() => handleAttemptClick(test)}
              >
                Attempt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfosysAssessment;