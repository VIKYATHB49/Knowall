import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "21-JUN-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "Logical_Reasoning_2025_06_21",
    "fileName": "Logical_Reasoning_2025_06_21",
    "sections": [
      {
        "name": "MCQ",
        "time": 20,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "12-MAY-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "Logical_Reasoning_2025_05_12",
    "fileName": "Logical_Reasoning_2025_05_12",
    "sections": [
      {
        "name": "MCQ",
        "time": 20,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "05-APR-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "Logical_Reasoning_2025_04_05",
    "fileName": "Logical_Reasoning_2025_04_05",
    "sections": [
      {
        "name": "MCQ",
        "time": 20,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "22-FEB-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "Logical_Reasoning_2025_02_22",
    "fileName": "Logical_Reasoning_2025_02_22",
    "sections": [
      {
        "name": "MCQ",
        "time": 20,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "10-JAN-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "Logical_Reasoning_2025_01_10",
    "fileName": "Logical_Reasoning_2025_01_10",
    "sections": [
      {
        "name": "MCQ",
        "time": 20,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "17-NOV-2024",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "Logical_Reasoning_2024_11_17",
    "fileName": "Logical_Reasoning_2024_11_17",
    "sections": [
      {
        "name": "MCQ",
        "time": 20,
        "questions": 20,
        "marks": 20,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  }
];

// helper to convert testName -> slug
const toSlug = (str) => str.replace(/_/g, '-').toLowerCase();

const LogicalReasoning = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    const slug = toSlug(test.testName);
    // ✅ pass entire test object (with sections) to next page
    navigate(`/assessments/logical-reasoning/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>Logical Reasoning Assessments</h2>
        <p>Here you find the logical reasoning assessments</p>
        <span className="logical-type">Logical</span>
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

export default LogicalReasoning;