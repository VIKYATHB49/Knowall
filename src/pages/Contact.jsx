import React, { useState } from "react";
import "../assets/css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    reason: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({ reason: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact <span style={{ color: "#5a3df0" }}>Knowall</span></h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Choose a reason, drop your email, and share your thoughts.
        </p>

        {submitted && (
          <div className="success-message">
            ✅ Thank you! Your message has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Reason for Contact</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a reason --</option>
              <option value="support">General Support</option>
              <option value="feedback">Feedback & Suggestions</option>
              <option value="bug">Report a Bug</option>
              <option value="partnership">Partnership / Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="contactus-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
