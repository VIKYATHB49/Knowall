import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import logo from "../assets/images/FooterLogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-section">
          <img src={logo} alt="Knowall Logo" className="logo-img" />
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/assessments">Assessments</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* Footer Info */}
        <div className="footer-section footer-info">
          <p>@2025 Know_all</p>
          <p className="small-text">A product by Sama Vikyath Reddy.</p>
        </div>
      </div>
    </footer>
  );
}
