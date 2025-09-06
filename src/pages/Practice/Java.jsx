// src/pages/Practice/Java.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '@/assets/css/PracticeTest.css';

const javaTests = [
  {
    testName: "Java Basics Test",
    questions: 10,
    slug: "java-basics-test",
    fileName: "java-basics",
    level: "Easy",
    sections: [{ name: "Java Basics", questions: 10 }]
  },
  {
    testName: "Java OOP Concepts Test",
    questions: 15,
    slug: "java-oop-test",
    fileName: "java-oop",
    level: "Medium",
    sections: [{ name: "Java OOP Concepts", questions: 15 }]
  },
  {
    testName: "Java Advanced Topics Test",
    questions: 20,
    slug: "java-advanced-test",
    fileName: "java-advanced",
    level: "Hard",
    sections: [{ name: "Java Advanced Topics", questions: 20 }]
  }
];

const JavaPractice = () => {
  const navigate = useNavigate();

  const handleStart = (test) => {
    navigate("/practice/java/practice-exam", {
      state: test,
    });
  };

  return (
    <div className="PracticeTest-logical-container">
      <div className="PracticeTest-page-heading">
        <h2>Java</h2>
      </div>
      <div className="PracticeTest-logical-grid">
        {javaTests.map((test, index) => (
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

export default JavaPractice;
