import React from "react";
import "../assets/css/Violation.css";
import infoIcon from "../assets/images/Info.png"; // You can replace with your info image path

const Violation = ({ countLeft, onAcknowledge }) => {
  return (
    <div className="violation-overlay">
      <div className="violation-container">
        <img src={infoIcon} alt="Info" className="violation-info-icon" />
        <p className="violation-message">
          You have <strong>{countLeft}</strong> Tab switch{countLeft > 1 ? "es" : ""} left
        </p>
        <button className="violation-ok-btn" onClick={onAcknowledge}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Violation;
