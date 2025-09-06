// QuestionArea.jsx
import React, { useState, useEffect } from "react";
import "../assets/css/QuestionArea.css";
import ImageModal from "../components/ImageModal";

const QuestionArea = ({
  test,
  questionsList,
  currentIndex,
  answers,
  handleOptionChange,
  handleTextChange,
}) => {
  const [modalImageSrc, setModalImageSrc] = useState(null);

  // ✅ state variables for marks
  const [PositiveMark, setPositiveMark] = useState(0);
  const [NegativeMark, setNegativeMark] = useState(0);

  useEffect(() => {
    if (!test || !questionsList || !questionsList[currentIndex]) {
      return;
    }

    const question = questionsList[currentIndex];
    const section = test.sections.find((sec) => sec.name === question.section);

    setPositiveMark(section?.PositiveMark ?? 0);
    setNegativeMark(section?.NegativeMark ?? 0);
  }, [currentIndex, questionsList, test]);

  if (!test || !questionsList || questionsList.length === 0) {
    return <p>Loading questions...</p>;
  }

  const question = questionsList[currentIndex];
  if (!question) return <p>Question not found.</p>;

  const handleImageClick = (src) => setModalImageSrc(src);

  const isTextareaQuestion = question.options?.some(
    (opt) => opt.type === "textarea"
  );

  const countWords = (text) => {
    if (typeof text !== "string") return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const currentAnswer = answers[currentIndex] || "";
  const wordCount = countWords(currentAnswer);

  const renderOptionContent = (opt) => {
    if (opt.image) {
      return (
        <div className="option-with-content">
          <img
            src={opt.image}
            alt={opt.text || "Option"}
            className="content-image clickable"
            onClick={(e) => {
              e.preventDefault();
              handleImageClick(opt.image);
            }}
          />
          {opt.text && <span>{opt.text}</span>}
        </div>
      );
    }
    if (opt.text) return <span>{opt.text}</span>;
    return <span>{opt.id}</span>;
  };

  return (
    <>
      <div className="exam-content">
        <div className="exam-header-row">
          <h2 className="test-name">{test.testName}</h2>
          <div className="exam-actions">
            <button className="report-btn">Report</button>
            <div className="marks-badges">
              <span className="positive-mark">+{PositiveMark}</span>
              <span className="negative-mark">-{NegativeMark}</span>
            </div>
          </div>
        </div>

        <div className="question-block">
          <h4 className="no-copy">
            Q{currentIndex + 1}. {question.text}
          </h4>

          {question.code && (
            <pre className="content-code-block">
              <code>{question.code}</code>
            </pre>
          )}

          {question.image && (
            <img
              src={question.image}
              alt="Question content"
              className="content-image clickable"
              onClick={() => handleImageClick(question.image)}
            />
          )}

          {isTextareaQuestion ? (
            <div className="textarea-option-container">
              <textarea
                className="essay-textarea"
                placeholder="Start writing your answer here..."
                value={currentAnswer}
                onChange={(e) =>
                  handleTextChange(currentIndex, e.target.value)
                }
              />
              <div className="word-count">Word Count: {wordCount}</div>
            </div>
          ) : (
            <ul className="question-options">
              {question.options?.map((opt, idx) => (
                <li key={opt.id || idx} className="question-option-item no-copy">
                  <label className="question-option-label">
                    <input
                      type="radio"
                      name={`q-${currentIndex}`}
                      checked={answers[currentIndex] === idx}
                      onChange={() => handleOptionChange(currentIndex, idx)}
                    />
                    {renderOptionContent(opt)}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {modalImageSrc && (
        <ImageModal src={modalImageSrc} onClose={() => setModalImageSrc(null)} />
      )}
    </>
  );
};

export default QuestionArea;
