import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "19-AUG-2025",
    "questions": 25,
    "marks": 25,
    "time": 25,
    "testName": "Operating_System_2025_08_19",
    "fileName": "Operating_System_2025_08_19",
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
    "date": "10-JUL-2025",
    "questions": 30,
    "marks": 30,
    "time": 30,
    "testName": "Operating_System_2025_07_10",
    "fileName": "Operating_System_2025_07_10",
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
    "date": "05-JUN-2025",
    "questions": 20,
    "marks": 20,
    "time": 20,
    "testName": "Operating_System_2025_06_05",
    "fileName": "Operating_System_2025_06_05",
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
    "date": "15-MAY-2025",
    "questions": 35,
    "marks": 35,
    "time": 35,
    "testName": "Operating_System_2025_05_15",
    "fileName": "Operating_System_2025_05_15",
    "sections": [
      {
        "name": "MCQ",
        "time": 35,
        "questions": 35,
        "marks": 35,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "25-APR-2025",
    "questions": 40,
    "marks": 40,
    "time": 40,
    "testName": "Operating_System_2025_04_25",
    "fileName": "Operating_System_2025_04_25",
    "sections": [
      {
        "name": "MCQ",
        "time": 40,
        "questions": 40,
        "marks": 40,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  }
];

// helper to convert testName -> slug
const toSlug = (str) => str.replace(/_/g, '-').toLowerCase();

const OperatingSystem = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    const slug = toSlug(test.testName);
    // ✅ pass entire test object (with sections) to next page
    navigate(`/assessments/os-concepts/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>Operating System Assessments</h2>
        <p>Here you find the Operating System Assessments</p>
        <span className="logical-type">Technical</span>
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

export default OperatingSystem;