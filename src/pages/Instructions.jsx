// File: src/pages/Instruction.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/Instructions.css';

const Instruction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const test = location.state;
  const [checked, setChecked] = useState(false);

  const handleStart = () => {
    if (checked) {
      const requestFullScreen = () => {
        const el = document.documentElement;
        if (el.requestFullscreen) {
          return el.requestFullscreen();
        } else if (el.mozRequestFullScreen) { // Firefox
          return el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) { // Chrome, Safari, Opera
          return el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) { // IE/Edge
          return el.msRequestFullscreen();
        }
        return Promise.resolve();
      };

      requestFullScreen()
        .catch((err) => console.warn("Fullscreen request failed:", err))
        .finally(() => {
          // ✅ Build dynamic exam path from current instructions path
          const basePath = location.pathname.replace('/instructions', '');
          const examPath = `${basePath}/exam`;

          navigate(examPath, { state: test });
        });
    }
  };

  if (!test) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>No test data found.</p>;
  }

  return (
    <div className="content">
      <h2>Instructions:</h2>
      <ol>
        <li>This assessment is scheduled on <b>{test.date}</b>.</li>
        <li>The countdown timer at the top of the screen will display the remaining time available for you to complete the examination.</li>
        <li>The Question Palette displayed on the right side of the screen will show the status of each question using symbols.</li>
        <li>You can navigate from one question to another using the Question Palette.</li>
        <li>Click on <b>Save and Next</b> to save your answer and move to the next question.</li>
        <li>To select an answer, click on the corresponding option.</li>
        <li>To deselect an answer, click on the "Clear Response" button.</li>
        <li>To change your answer, click on a different option.</li>
        <li>After clicking <b>Save and Next</b> on the last question in a section, you’ll move to the next section automatically.</li>
        <li>For <b>Coding Questions</b>, click <b>Submit Code</b> or the question will be marked as unattempted.</li>
        <li>
          <b>Test Details:</b> {test.questions} Questions | {test.marks} Marks | Duration: {test.time}&nbsp;mins
        </li>
      </ol>

      <hr />

      <div className="declaration-row">
        <input
          type="checkbox"
          id="myCheckbox"
          className="box"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="myCheckbox" className="paragraph">
          I have read and understood the instructions. All computer hardware allotted to me is in proper working condition.
          I declare that I am not in possession of or using any prohibited gadget like a mobile phone, Bluetooth device, or any material not allowed inside the examination hall.
        </label>
      </div>

      <div className="button-wrapper">
        <button
          className={`submit ${checked ? 'active' : 'disabled'}`}
          onClick={handleStart}
          disabled={!checked}
        >
          Start Assessment
        </button>
      </div>
    </div>
  );
};

export default Instruction;
