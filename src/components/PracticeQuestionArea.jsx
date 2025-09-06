// src/components/PracticeQuestionArea.jsx
import React from 'react';
import '../assets/css/PracticeQuestionArea.css';

const PracticeQuestionArea = ({
  question,
  currentIndex,
  userAnswer,
  handleOptionChange,
}) => {
  if (!question) {
    return <div>Loading question...</div>;
  }

  const correctIndex = question.correctOptionIndex;

  return (
    <main className="practice-question-area">
      <p className="question-counter">Question {currentIndex + 1}</p>
      <p
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question.text }}
      ></p>
      {question.image && (
        <img
          src={question.image}
          alt="question illustration"
          className="question-image"
        />
      )}

      <div className="options-container">
        {question.options.map((option, optionIndex) => {
          let optionClass = 'option-item';

          if (userAnswer !== null) {
            if (optionIndex === correctIndex) {
              optionClass += ' correct';
            }
            if (userAnswer === optionIndex && optionIndex !== correctIndex) {
              optionClass += ' incorrect';
            }
          }

          if (userAnswer === optionIndex) {
            optionClass += ' selected';
          }

          return (
            <div
              key={option.id || optionIndex}
              className={optionClass}
              onClick={() => handleOptionChange(currentIndex, optionIndex)}
            >
              <div className="option-radio"></div>
              <span className="option-text">{option.value}</span>
              {option.image && (
                <img src={option.image} alt="option" className="option-image" />
              )}
            </div>
          );
        })}
      </div>
      {userAnswer !== null && question.explanation && (
        <div className="explanation-area">
          <h4 className="explanation-title">Explanation</h4>
          <p
            className="explanation-text"
            dangerouslySetInnerHTML={{ __html: question.explanation }}
          ></p>
        </div>
      )}
    </main>
  );
};

export default PracticeQuestionArea;