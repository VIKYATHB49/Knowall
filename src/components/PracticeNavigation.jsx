import React from 'react';
import '../assets/css/PracticeNavigation.css';

const PracticeNavigation = ({ accuracy }) => {
  const getProgressColor = (acc) => {
    if (acc <= 35) {
      return '#ef4444'; // Red
    } else if (acc < 60) {
      return '#f97316'; // Orange
    } else {
      return '#22c55e'; // Green
    }
  };

  const progressColor = getProgressColor(accuracy);
  const progressDegrees = accuracy * 3; // 1% = 3 degrees

  const progressStyle = {
    '--progress-degrees': `${progressDegrees}deg`,
    '--progress-color': progressColor,
  };

  return (
    <aside className="PracticeNavigation" style={progressStyle}>
      <div className="PracticeNavigation-circle">
        <div className="PracticeNavigation-inner"></div>
      </div>
      <div className="PracticeNavigation-label">
        <span className="PracticeNavigation-percent">{accuracy}%</span>
        <span className="PracticeNavigation-text">Accuracy</span>
      </div>
    </aside>
  );
};

export default PracticeNavigation;
