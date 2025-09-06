import React, { useState, useEffect } from "react";
import "../assets/css/ImageModal.css";

const ImageModal = ({ src, onClose }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale(1);
  }, [src]);

  const handleZoomIn = () => setScale((prevScale) => prevScale + 0.1);
  const handleZoomOut = () => setScale((prevScale) => Math.max(0.2, prevScale - 0.1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>
          &times;
        </button>
        <img
          className="image-modal-content"
          src={src}
          alt="Zoomed content"
          style={{ transform: `scale(${scale})` }}
        />
        <div className="image-modal-controls">
          <button onClick={handleZoomOut}>-</button>
          <button onClick={handleZoomIn}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;