import React from 'react';
import { useNavigate } from 'react-router-dom';

const testData = [
  {
    date: '18-AUG-2025',
    questions: 30,
    marks: 30,
    duration: '30 Min',
    testName: 'AI_Mock_Test_2025_08_18',
    fileName: 'AI_Mock_Test_2025_08_18'
  }
];

const AIMockTest = () => {
  const navigate = useNavigate();

  const handleAttemptClick = (test) => {
    navigate('/details', { state: test });
  };

  return (
    <div className="logical-container">
      <div className="logical-header">
        <h2>AI Mock Test</h2>
        <p>Here you find the AI mock test assessment</p>
        <span className="logical-type">AI</span>
      </div>

      <div className="logical-grid">
        {testData.map((test, index) => (
          <div className="logical-card" key={index}>
            <div className="logical-card-content">
              <h3>{test.date}</h3>
              <hr />
              <p className="logical-light">Questions: {test.questions}</p>
              <p className="logical-light">Marks: {test.marks}</p>
              <p className="logical-light">Duration: {test.duration}</p>
              <button className="logical-attempt-btn" onClick={() => handleAttemptClick(test)}>
                Attempt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMockTest;
