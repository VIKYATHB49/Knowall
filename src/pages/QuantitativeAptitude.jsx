import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "28-JUL-2025",
    "questions": 10,
    "marks": 10,
    "time": 10,
    "testName": "QuantitativeAptitude_2025_07_28",
    "fileName": "QuantitativeAptitude_2025_07_28",
    "sections": [
      {
        "name": "MCQ",
        "time": 10,
        "questions": 10,
        "marks": 10,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "13-JUL-2025",
    "questions": 10,
    "marks": 10,
    "time": 10,
    "testName": "QuantitativeAptitude_2025_07_13",
    "fileName": "QuantitativeAptitude_2025_07_13",
    "sections": [
      {
        "name": "MCQ",
        "time": 10,
        "questions": 10,
        "marks": 10,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "03-JUL-2025",
    "questions": 10,
    "marks": 10,
    "time": 10,
    "testName": "QuantitativeAptitude_2025_07_03",
    "fileName": "QuantitativeAptitude_2025_07_03",
    "sections": [
      {
        "name": "MCQ",
        "time": 10,
        "questions": 10,
        "marks": 10,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "21-JUN-2025",
    "questions": 10,
    "marks": 10,
    "time": 10,
    "testName": "QuantitativeAptitude_2025_06_21",
    "fileName": "QuantitativeAptitude_2025_06_21",
    "sections": [
      {
        "name": "MCQ",
        "time": 10,
        "questions": 10,
        "marks": 10,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "07-JUN-2025",
    "questions": 10,
    "marks": 10,
    "time": 10,
    "testName": "QuantitativeAptitude_2025_06_07",
    "fileName": "QuantitativeAptitude_2025_06_07",
    "sections": [
      {
        "name": "MCQ",
        "time": 10,
        "questions": 10,
        "marks": 10,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "29-MAY-2025",
    "questions": 10,
    "marks": 10,
    "time": 10,
    "testName": "QuantitativeAptitude_2025_05_29",
    "fileName": "QuantitativeAptitude_2025_05_29",
    "sections": [
      {
        "name": "MCQ",
        "time": 10,
        "questions": 10,
        "marks": 10,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "12-MAY-2025",
    "questions": 10,
    "marks": 10,
    "time": 10,
    "testName": "QuantitativeAptitude_2025_05_12",
    "fileName": "QuantitativeAptitude_2025_05_12",
    "sections": [
      {
        "name": "MCQ",
        "time": 10,
        "questions": 10,
        "marks": 10,
        "PositiveMark": 1,
        "NegativeMark": 0
      }
    ]
  }
];

// helper to convert testName -> slug
const toSlug = (str) => str.replace(/_/g, '-').toLowerCase();

const QuantitativeAptitude = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    const slug = toSlug(test.testName);
    // ✅ pass entire test object (with sections) to next page
    navigate(`/assessments/quantitative-aptitude/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>Quantitative Aptitude Assessments</h2>
        <p>Here you find Quantitative Aptitude assessments</p>
        <span className="logical-type">Quantitative</span>
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

export default QuantitativeAptitude;