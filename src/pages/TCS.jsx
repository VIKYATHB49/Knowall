import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "20-AUG-2025",
    "questions": 65,
    "marks": 65,
    "time": 75,
    "testName": "TCS_NQT_2025_08_20",
    "fileName": "TCS_NQT_2025_08_20",
    "sections": [
      {
        "name": "Numerical Ability",
        "time": 25,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      },
      {
        "name": "Reasoning Ability",
        "time": 25,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      },
      {
        "name": "Verbal Ability",
        "time": 25,
        "questions": 25,
        "marks": 25,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "02-AUG-2025",
    "questions": 65,
    "marks": 65,
    "time": 75,
    "testName": "TCS_NQT_2025_08_02",
    "fileName": "TCS_NQT_2025_08_02",
    "sections": [
      {
        "name": "Numerical Ability",
        "time": 25,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      },
      {
        "name": "Reasoning Ability",
        "time": 25,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      },
      {
        "name": "Verbal Ability",
        "time": 25,
        "questions": 25,
        "marks": 25,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  }
];

// helper to convert testName -> slug
const toSlug = (str) => str.replace(/_/g, '-').toLowerCase();

const TCSAssessment = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    const slug = toSlug(test.testName);
    navigate(`/assessments/tcs-nqt/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>TCS NQT Assessments</h2>
        <p>Here you find the TCS National Qualifier Test assessments</p>
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
              <p className="logical-light">Duration: {test.time} mins</p>
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

export default TCSAssessment;