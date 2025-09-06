import React from 'react';
import '../assets/css/LogicalReasoning.css';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    "date": "18-AUG-2025",
    "questions": 20,
    "marks": 40,
    "time": 20,
    "testName": "Java_Programming_2025_08_18",
    "fileName": "Java_Programming_2025_08_18",
    "sections": [
      {
        "name": "MCQ",        
        "time": 20,
        "questions": 20,
        "marks": 40,
        "PositiveMark": 2,
        "NegativeMark": 0
      }
    ]
  },
  {
    "date": "05-AUG-2025",
    "questions": 30,
    "marks": 60,
    "time": 30,
    "testName": "Java_Programming_2025_08_05",
    "fileName": "Java_Programming_2025_08_05",
    "sections": [
      {
        "name": "MCQ",         
        "time": 30,
        "questions": 30,
        "marks": 60,
        "PositiveMark": 2,
        "NegativeMark": 0,
      }
    ]
  }
];

// helper to convert testName -> slug
const toSlug = (str) => str.replace(/_/g, '-').toLowerCase();

const JavaProgramming = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    const slug = toSlug(test.testName);
    // ✅ pass entire test object (with sections) to next page
    navigate(`/assessments/java/${slug}`, { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>Java Programming Assessments</h2>
        <p>Here you find the Java programming assessments</p>
        <span className="logical-type">Java</span>
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

export default JavaProgramming;
