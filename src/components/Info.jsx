import React from "react";
import PropTypes from "prop-types";
import "../assets/css/Info.css";

const Info = ({
  moduleName,
  totalQuestions,
  attemptedQuestions,
  onSubmit,
  onCancel,
  isLastSection = false,
  isFinalSubmit = false,
}) => {

  const getInfoNote = () => {
    if (isFinalSubmit) {
      return "By clicking 'Yes, Submit!', you will be redirected to the results page. Any sections you haven't attempted will be marked as zero.";
    }
    if (isLastSection) {
      return "Clicking 'Yes, Submit!' will end the Assessment and take you to the Results page.";
    }
    return "Clicking 'Yes, Submit!' will save this Section and move to the Next Section.";
  };

  return (
    <div className="info-overlay">
      <div className="info-container">
        <h2>Are you sure you want to Submit?</h2>
        <h4>Your Assessment Summary</h4>
        <table className="info-table">
          <thead>
            <tr>
              <th>MODULE</th>
              <th>QUESTIONS</th>
              <th>YOU ATTEMPTED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{moduleName}</td>
              <td>{totalQuestions}</td>
              <td>{attemptedQuestions}</td>
            </tr>
          </tbody>
        </table>
        <p className="info-note">{getInfoNote()}</p>
        <div className="info-buttons">
          <button className="btn-submit" onClick={onSubmit}>Yes, Submit!</button>
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  moduleName: PropTypes.string.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  attemptedQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLastSection: PropTypes.bool,
  isFinalSubmit: PropTypes.bool,
};

export default Info;