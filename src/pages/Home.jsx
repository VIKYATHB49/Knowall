import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ Import navigate
import "../assets/css/Home.css";

import Hero from "../assets/images/Home.png";
import Assessment from '../assets/images/Assessments.png';
import Skills from '../assets/images/Skills.png';
import placement from '../assets/images/Placement.png';

import CLogo from "../assets/images/C.png";
import JavaLogo from "../assets/images/Java.png";
import PythonLogo from "../assets/images/Python.png";
import MySQLLogo from "../assets/images/Mysql.png";
import AWSLogo from "../assets/images/Aws.png";
import Angular from "../assets/images/React.png";
import DotNetLogo from "../assets/images/.Net.png";
import DockerLogo from "../assets/images/Docker.png";
import GitHubLogo from "../assets/images/GitHub.png";
import NodeLogo from "../assets/images/Nodejs.png";

import AccentureLogo from "../assets/images/companies/Accenture.png";
import TataLogo from "../assets/images/companies/Tcs.png";
import WiproLogo from "../assets/images/companies/Wipro.png";
import GoogleLogo from "../assets/images/companies/Google.png";
import DellLogo from "../assets/images/companies/Dell.png";
import InfosysLogo from "../assets/images/companies/Infosys.png";
import AmazonLogo from "../assets/images/companies/Amazon.png";
import EpamLogo from "../assets/images/companies/Epam.png";
import CoforgeLogo from "../assets/images/companies/Coforge.png";
import HclLogo from "../assets/images/companies/Hcl.png";
import CognizantLogo from "../assets/images/companies/Cognizant.png";
import CapgeminiLogo from "../assets/images/companies/Capgemini.png";

const words = ["Test Series", "Courses", "Practice", "Learning"];

const skills = [
  { name: "C", logo: CLogo },
  { name: "Java", logo: JavaLogo },
  { name: "Python", logo: PythonLogo },
  { name: "MySQL", logo: MySQLLogo },
  { name: "AWS", logo: AWSLogo },
  { name: "Angular", logo: Angular },
  { name: ".NET", logo: DotNetLogo },
  { name: "Docker", logo: DockerLogo },
  { name: "GitHub", logo: GitHubLogo },
  { name: "Node.js", logo: NodeLogo },
];

const companies = [
  { name: "Accenture", logo: AccentureLogo },
  { name: "TATA", logo: TataLogo },
  { name: "Wipro", logo: WiproLogo },
  { name: "Google", logo: GoogleLogo },
  { name: "Dell", logo: DellLogo },
  { name: "Infosys", logo: InfosysLogo },
  { name: "Amazon", logo: AmazonLogo },
  { name: "EPAM", logo: EpamLogo },
  { name: "Coforge", logo: CoforgeLogo },
  { name: "HCL", logo: HclLogo },
  { name: "Cognizant", logo: CognizantLogo },
  { name: "Capgemini", logo: CapgeminiLogo },
];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // ✅ auth state

  const navigate = useNavigate();

  // ✅ Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) setIsAuthenticated(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;
    const word = words[currentWordIndex];

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex]);

  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <h1>
            Start your preparation <br />
            with Knowall: <span className="typed-text">{text}</span>
          </h1>
          <p>
            Interactive Courses, Top notch Assessments, <br />
            High-yield QBank and all essentials — just a click away.
          </p>
          
          {/* ✅ Hide Login button if authenticated */}
          {!isAuthenticated && (
            <button className="explore-btn" onClick={() => navigate("/login")}>
              Login to Explore..
            </button>
          )}
        </div>
        <div className="home-right">
          <img src={Hero} alt="illustration" />
        </div>
      </div>

      {/* Assessment section */}
      <div className="assessment-section">
        <div className="assessment-left">
          <img src={Assessment} alt="Assessment Illustration" />
        </div>
        <div className="assessment-right">
          <h2>Get a choice of your <span>Assessment Packs</span></h2>
          <div className="assessment-tags">
            <span>Designed by subject experts</span>
            <span>Latest syllabus and pattern</span>
            <span>Subject wise assessments</span>
            <span>Detailed solution with Analysis</span>
            <span>Topic wise model Questions</span>
            <span>Live tests with real time experience</span>
          </div>
          {/* ✅ Navigate to Practice */}
          <button 
            className="assessment-btn" 
            onClick={() => navigate("/practice")}
          >
            500+ Tests are waiting for you...
          </button>
        </div>
      </div>

      {/* Skill section */}
      <div className="skills-container">
        <div className="left-section">
          <h2>Now it's easy to <span>Upskill yourself</span></h2>
          <div className="grid-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>
          {/* ✅ Navigate to Courses */}
          <button 
            className="explore-btn" 
            onClick={() => navigate("/courses")}
          >
            Explore our I-Academy Courses
          </button>
        </div>
        <div className="right-section">
          <img src={Skills} alt="Learning" />
        </div>
      </div>

      {/* Placement section */}
      <div className="placement">
        <div className="placement-content">
          <h2>Train and get placed in one of your <br /> <span>dream companies</span></h2>
          <p>
            Our Instructors help you to upskill at market cutting-edge technologies<br />
            and programming
          </p>
          <ul>
            <li>Customized Syllabus</li>
            <li>One-2-One live classes</li>
            <li>At your feasible timings on Weekdays / Weekends</li>
            <li>Dedicated query resolution instructor</li>
            <li>Job Assistance</li>
          </ul>
         <button 
  className="contact-btn" 
  onClick={() => navigate("/contact")}
>
  Contact Us
</button>

        </div>
        <div className="placement-image">
          <img src={placement} alt="Placement Illustration" />
        </div>
      </div>

      {/* Company section */}
      <div className="companies">
        <h2>Our <span>Aspirants</span> placed in 30+ sector leading companies</h2>
        <div className="company-grid">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
