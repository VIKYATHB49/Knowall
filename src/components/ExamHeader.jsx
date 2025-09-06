import React from 'react';
import logo from '../assets/images/Logo.png';
import '../assets/css/Examheader.css';

const ExamHeader = ({
  sectionName,       
  totalSections,      // now required from state/props
  liveTime,           // timer value from state
  onSubmit,
  fullscreenBtnText,  // dynamic button text from state
  onToggleFullScreen
}) => {
  return (
    <>
      {/* Row 1 - Logo, Timer, Buttons */}
      <header className="exam-header">
        <div className="left">
          <img src={logo} alt="Logo" className="exam-logo" />
        </div>
        <div className="center">
          <span className="timer">{liveTime}</span>
        </div>
        <div className="right">
          <button className="btn-outline" onClick={onToggleFullScreen}>
            {fullscreenBtnText}
          </button>
          <button className="btn-primary" onClick={onSubmit}>
            Submit Test
          </button>
        </div>
      </header>

      {/* Row 2 - Section Info */}
      <div className="exam-subheader">
        <div className="section-info">
          Section: <span className="exam-section-badge">{sectionName}</span>
        </div>
        <div className="section-count">
          Total Sections: <strong>{totalSections}</strong>
        </div>
      </div>
    </>
  );
};

export default ExamHeader;
