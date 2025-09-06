import React from 'react';
import '../assets/css/PracticeHeader.css';

const PracticeHeader = ({ liveTime, sectionName }) => {
  return (
    <header className="practice-header">
      <h1 className="section-name">{sectionName}</h1>
      <div className="stopwatch">{liveTime}</div>
    </header>
  );
};

export default PracticeHeader;