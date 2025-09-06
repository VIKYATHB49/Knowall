import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "20-AUG-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "DBMS_2025_08_20",
    "fileName": "DBMS_2025_08_20",
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
    "date": "15-JUL-2025",
    "questions": 25,
    "marks": 25,
    "time": 25,
    "testName": "DBMS_2025_07_15",
    "fileName": "DBMS_2025_07_15",
    "sections": [
      {
        "name": "MCQ",
        "time": 25,
        "questions": 25,
        "marks": 25,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "10-JUN-2025",
    "questions": 30,
    "marks": 30,
    "time": 30,
    "testName": "DBMS_2025_06_10",
    "fileName": "DBMS_2025_06_10",
    "sections": [
      {
        "name": "MCQ",
        "time": 30,
        "questions": 30,
        "marks": 30,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "05-MAY-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "DBMS_2025_05_05",
    "fileName": "DBMS_2025_05_05",
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
    "date": "22-MAR-2025",
    "questions": 15,
    "marks": 15,
    "time": 15,
    "testName": "DBMS_2025_03_22",
    "fileName": "DBMS_2025_03_22",
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

const DBMS = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    const slug = toSlug(test.testName);
    // ✅ pass entire test object (with sections) to next page
    navigate(`/assessments/dbms/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>DBMS Assessments</h2>
        <p>Here you find the Database Management System assessments</p>
        <span className="logical-type">DBMS</span>
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

export default DBMS;