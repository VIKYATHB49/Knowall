import React, { useState, useEffect } from 'react';
import '../assets/css/Notification.css'; // We will create this CSS file next

const Notification = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        // Allow time for fade-out animation before clearing the message
        setTimeout(onClose, 500); 
      }, 3000); // 3-second time limit

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [message, onClose]);

  if (!message) {
    return null;
  }

  return (
    <div className={`notification ${type} ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  );
};

export default Notification;