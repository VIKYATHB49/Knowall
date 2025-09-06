import React from 'react';
import { FaLock } from 'react-icons/fa'; 
import '../assets/css/Courses.css';

import courseImage1 from '../assets/images/Reactjs_Basics.png'; 
import courseImage2 from '../assets/images/Advanced_css.png'; 
import courseImage3 from '../assets/images/SpringBoot.png';

const coursesData = [
  {
    id: 1,
    image: courseImage1,
    title: 'React for Beginners',
    duration: '8 Weeks',
    level: 'Beginner',
    isLocked: true
  },
  {
    id: 2,
    image: courseImage2,
    title: 'Advanced CSS',
    duration: '6 Weeks',
    level: 'Intermediate',
    isLocked: true
  },
  {
    id: 3,
    image: courseImage3,
    title: 'Spring Boot',
    duration: '12 Weeks',
    level: 'Advanced',
    isLocked: true
  }
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h1 className="courses-main-title">Our Courses</h1>
      <p className="courses-subtitle">
        Explore our curated list of courses to boost your career.
      </p>
      
      <div className="courses-container">
        {coursesData.map((course) => (
          <div 
            className={`course-card ${course.isLocked ? 'locked-card' : ''}`} 
            key={course.id}
          >
            <div className="course-card-image-wrapper">
              <img 
                src={course.image} 
                alt={course.title} 
                className="course-card-image" 
              />
            </div>

            <div className="course-card-content">
              <h3 className="course-card-title">{course.title}</h3>

              <div className="course-card-details">
                <span className="detail-item">
                  <strong>Duration:</strong> {course.duration}
                </span>
                <span className="detail-item">
                  <strong>Level:</strong> {course.level}
                </span>
              </div>

              <button 
                className="course-card-button"
                disabled={course.isLocked}
              >
                <FaLock className="lock-icon" /> 
                {course.isLocked ? "Locked" : "Enroll Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
