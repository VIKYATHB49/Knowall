import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import '../assets/css/Assessment.css';
import bookImage from '../assets/images/book.png';

// Updated: all routes standardized to start with /assessments/
const assessmentsData = [
  { id: 1, type: 'AI mock', title: 'AI Interview Simulation', assessments: 1, isLocked: true },
  { id: 2, type: 'CST', title: 'Infosys Test', assessments: 1, route: '/assessments/infosys-assessment' },
  { id: 3, type: 'Aptitude', title: 'Logical Reasoning', assessments: 6, route: '/assessments/logical-reasoning' },
  { id: 4, type: 'Programming', title: 'Python', assessments: 3, route: '/assessments/python' },
  { id: 5, type: 'Technical', title: 'OS Concepts', assessments: 5, route: '/assessments/os-concepts' },
  { id: 6, type: 'Aptitude', title: 'Quantitative Aptitude', assessments: 7, route: '/assessments/quantitative-aptitude' },
  { id: 7, type: 'CST', title: 'TCS NQT', assessments: 2, route: '/assessments/tcs-nqt' },
  { id: 8, type: 'Programming', title: 'Java SE', assessments: 2, route: '/assessments/java' },
  { id: 9, type: 'Technical', title: 'Database Management System', assessments: 5, route: '/assessments/dbms' }
];


const filters = ['All', 'CST', 'Aptitude', 'Programming', 'Technical', 'AI mock'];

export default function Assessment() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredData =
    filter === 'All'
      ? [...assessmentsData].sort((a, b) => (a.type === 'AI mock' ? -1 : 1))
      : assessmentsData.filter(item => item.type === filter);

  return (
    <div className="content1">
      {/* Filters */}
      <div className="filters">
        {filters.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Assessment Cards */}
      <div className="card-container">
        {filteredData.map(assessment => (
          <div
            key={assessment.id}
            className={`test ${assessment.type === 'AI mock' ? 'locked-card' : ''}`}
          >
            <div className="in-test">
              <div className="top-row">
                <span className="type">{assessment.type}</span>
                <span className="amount">Free</span>
                {assessment.type === 'AI mock' && <span className="badge-new">NEW</span>}
              </div>

              <h3>{assessment.title}</h3>
              <p className="light-colour">By Your Vendor</p>
              <hr />

              <div className="bottom-row">
                <img src={bookImage} className="book" alt="book" />
                <p className="light-colour">{assessment.assessments} Assessments</p>
              </div>

              {assessment.isLocked ? (
                <button className="locked-btn" disabled>
                  <FaLock className="lock-icon" /> Locked
                </button>
              ) : (
                <button
                  className="open"
                  onClick={() => navigate(assessment.route)}
                >
                  Open
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
