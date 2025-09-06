import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "25-JUL-2025",
    "questions": 15,
    "marks": 15,
    "time": 15,
    "testName": "Python_Programming_2025_07_25",
    "fileName": "Python_Programming_2025_07_25",
    "sections": [
      {
        "name": "MCQ",
        "time": 15,
        "questions": 15,
        "marks": 15,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "10-JUL-2025",
    "questions": 15,
    "marks": 15,
    "time": 15,
    "testName": "Python_Programming_2025_07_10",
    "fileName": "Python_Programming_2025_07_10",
    "sections": [
      {
        "name": "MCQ",
        "time": 15,
        "questions": 15,
        "marks": 15,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "28-JUN-2025",
    "questions": 15,
    "marks": 15,
    "time": 15,
    "testName": "Python_Programming_2025_06_28",
    "fileName": "Python_Programming_2025_06_28",
    "sections": [
      {
        "name": "MCQ",
        "time": 15,
        "questions": 15,
        "marks": 15,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  }
];

// helper to convert testName -> slug
const toSlug = (str) => str.replace(/_/g, '-').toLowerCase();

const Python = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    const slug = toSlug(test.testName);
    navigate(`/assessments/python/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>Python Programming Assessments</h2>
        <p>Here you find the Python programming assessments</p>
        <span className="logical-type">Programming</span>
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

export default Python;