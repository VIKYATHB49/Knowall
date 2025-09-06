import React from "react";
import "../assets/css/Footercomp.css";

const AboutUs = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About <span className="highlight">Us</span></h1>
      <div className="card about-content">
        <div className="about-section">
          <h3>Our <span className="highlight">Story</span></h3>
          <p>
            Welcome to <strong>Knowall</strong>, where technology meets innovation.
            Founded with a vision to bridge the gap between complex technologies and practical solutions,
            we are a team of passionate engineers, educators, and innovators
            dedicated to empowering businesses, institutions, and individuals
            through cutting-edge technology solutions.
          </p>
        </div>

        <div className="about-section">
          <h3>Our <span className="highlight">Mission</span></h3>
          <p>
            Our mission is simple yet profound: to simplify complex technologies and make them
            accessible, reliable, and impactful. With a deep understanding of
            modern IT ecosystems, we aim to be the trusted partner for
            organizations looking to embrace digital transformation.
          </p>
        </div>

        <div className="about-section">
          <h3>Our <span className="highlight">Vision</span></h3>
          <p>
            We envision a world where technology serves as an enabler for growth, learning, and innovation.
            Our goal is to create solutions that not only meet current needs but also anticipate future challenges,
            ensuring our clients stay ahead in an ever-evolving digital landscape.
          </p>
        </div>

        <div className="about-section">
          <h3>Our <span className="highlight">Values</span></h3>
          <ul className="values-list">
            <li><strong>Innovation:</strong> We constantly explore new possibilities and push the boundaries of what technology can achieve.</li>
            <li><strong>Integrity:</strong> We believe in transparent, ethical practices in all our dealings and commitments.</li>
            <li><strong>Excellence:</strong> We strive for the highest standards in every project, ensuring quality and reliability.</li>
            <li><strong>Collaboration:</strong> We foster partnerships that create mutual value and shared success.</li>
            <li><strong>Customer-Centric:</strong> Our solutions are designed with our clients' success at the core of our approach.</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Our <span className="highlight">Expertise</span></h3>
          <p>
            At Knowall, collaboration is at the heart of everything we do. Our
            team brings diverse expertise across fields like software engineering,
            IT support, education, system integration, cloud computing, cybersecurity,
            and data analytics. Together, we build solutions that don't just solve problems—but also create
            opportunities for growth and innovation.
          </p>
        </div>

        <div className="about-section">
          <h3>Our <span className="highlight">Commitment</span></h3>
          <p>
            We are committed to delivering sustainable, scalable, and secure technology solutions
            that drive measurable results. Our approach combines technical excellence with
            strategic thinking to ensure that every solution we deliver aligns with our clients'
            long-term objectives and contributes to their competitive advantage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;