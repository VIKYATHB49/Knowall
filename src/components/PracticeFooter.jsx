// src/components/PracticeFooter.jsx
import React from 'react';
import '../assets/css/PracticeFooter.css';

const PracticeFooter = ({ 
  onPrev, 
  onNext, 
  isFirst, 
  isLast, 
  onSubmit,
  isNextDisabled,
  isSubmitDisabled // Add this new prop
}) => {
  return (
    <footer className="practice-footer">
      <button 
        className="footer-btn prev-btn" 
        onClick={onPrev} 
        disabled={isFirst}
      >
        Previous
      </button>

      {isLast ? (
        <button 
          className="footer-btn submit-btn" 
          onClick={onSubmit}
          disabled={isSubmitDisabled} // Use the new prop
        >
          Save & Submit
        </button>
      ) : (
        <button 
          className={`footer-btn next-btn ${isNextDisabled ? 'disabled' : ''}`} 
          onClick={onNext}
          disabled={isNextDisabled} 
        >
          Next
        </button>
      )}
    </footer>
  );
};

export default PracticeFooter;