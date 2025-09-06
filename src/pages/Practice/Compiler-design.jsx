// src/pages/Practice/Compiler-design.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const compilerTests = [
  {
    testName: "Compiler Design Basics Test",
    questions: 10,
    slug: "compiler-design-basics-test",
    fileName: "compiler-design-basics",
    level: "Easy",
    sections: [{ name: "Compiler Design Basics", questions: 10 }]
  },
  {
    testName: "Compiler Design Advanced Test",
    questions: 15,
    slug: "compiler-design-advanced-test",
    fileName: "compiler-design-advanced",
    level: "Hard",
    sections: [{ name: "Compiler Design Advanced", questions: 15 }]
  }
];

const CompilerDesign = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/compiler-design/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Compiler Design</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {compilerTests.map((test, index) => (
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

export default CompilerDesign;
