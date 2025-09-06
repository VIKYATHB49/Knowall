import React from 'react';
import '../assets/css/ExamFooter.css';

const ExamFooter = ({ onClear, onNext, onSubmit, isLast, isNavigatorOpen }) => (
  <footer className={`ExamFooter ${isNavigatorOpen ? 'shrink' : ''}`}>
    <div className="ExamFooter-left">
      <button 
        type="button" 
        className="ExamFooter-btn-outline" 
        onClick={onClear} 
        aria-label="Clear current question response"
      >
        Clear Response
      </button>
    </div>
    <div className="ExamFooter-right">
      <button 
        type="button" 
        className="ExamFooter-btn-primary" 
        onClick={isLast ? onSubmit : onNext} 
        aria-label={isLast ? "Save and submit test" : "Save answer and go to next question"}
      >
        {isLast ? 'Save & Submit' : 'Save & Next'}
      </button>
    </div>
  </footer>
);

export default ExamFooter;
