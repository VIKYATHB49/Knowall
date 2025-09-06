import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/QuestionNavigator.css';

const QuestionNavigator = ({
  testName = "Assessment",
  sectionName = "Quantitative Aptitude",
  totalQuestions,
  currentIndex,
  goToQuestion,
  answers,
  onSubmitSection
}) => {
  const displayTestName = testName.split(' - ')[0];

  return (
    <div className="question-navigator-container">
      <div className="question-navigator-content">
        <div className="navigator-header">
          <h3 className="test-name">{displayTestName}</h3>
          <p className="section-name">{sectionName}</p>
        </div>

        <div className="question-grid-container">
          <div className="question-grid">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <button
                key={`q-${i}`}
                className={`question-btn 
                  ${i === currentIndex ? 'active' : ''}
                  ${answers[i] !== null ? 'answered' : ''}`}
                aria-label={`Question ${i + 1} ${answers[i] !== null ? 'answered' : 'not answered'}`}
                onClick={() => goToQuestion(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button 
          className="submit-btn"
          onClick={onSubmitSection}
        >
          Submit Section
        </button>
      </div>
    </div>
  );
};

QuestionNavigator.propTypes = {
  testName: PropTypes.string,
  sectionName: PropTypes.string,
  totalQuestions: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  goToQuestion: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
  onSubmitSection: PropTypes.func.isRequired
};

export default memo(QuestionNavigator);
