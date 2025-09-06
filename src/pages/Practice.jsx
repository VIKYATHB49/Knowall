import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Practice.css';

// Expanded data for the practice cards
const practiceData = [
  // Aptitude (12)
  { id: 1, type: 'Aptitude', title: 'Boats and Streams', route: '/practice/boats-and-streams' },
  { id: 11, type: 'Aptitude', title: 'Time and Work', route: '/practice/time-and-work' },
  { id: 13, type: 'Aptitude', title: 'Data Interpretation', route: '/practice/data-interpretation' },
  { id: 14, type: 'Aptitude', title: 'Percentages', route: '/practice/percentages' },
  { id: 15, type: 'Aptitude', title: 'Logical Reasoning Puzzles', route: '/practice/logical-puzzles' },
  { id: 16, type: 'Aptitude', title: 'Series Completion', route: '/practice/series-completion' },
  { id: 17, type: 'Aptitude', title: 'Blood Relations', route: '/practice/blood-relations' },
  { id: 18, type: 'Aptitude', title: 'Profit and Loss', route: '/practice/profit-loss' },
  { id: 19, type: 'Aptitude', title: 'Simple & Compound Interest', route: '/practice/interest' },
  { id: 20, type: 'Aptitude', title: 'Permutations & Combinations', route: '/practice/permutations' },
  { id: 21, type: 'Aptitude', title: 'Probability', route: '/practice/probability' },

  // English (10)
  { id: 2, type: 'English', title: 'Passage Comprehension', route: '/practice/passage-comprehension' },
  { id: 12, type: 'English', title: 'Sentence Correction', route: '/practice/sentence-correction' },
  { id: 22, type: 'English', title: 'Synonyms & Antonyms', route: '/practice/synonyms-antonyms' },
  { id: 23, type: 'English', title: 'Fill in the Blanks', route: '/practice/fill-blanks' },
  { id: 24, type: 'English', title: 'Idioms and Phrases', route: '/practice/idioms-phrases' },
  { id: 25, type: 'English', title: 'Error Spotting', route: '/practice/error-spotting' },
  { id: 26, type: 'English', title: 'Para Jumbles', route: '/practice/para-jumbles' },
  { id: 27, type: 'English', title: 'Vocabulary Test', route: '/practice/vocabulary' },
  { id: 28, type: 'English', title: 'Active & Passive Voice', route: '/practice/voice-change' },
  { id: 29, type: 'English', title: 'Direct & Indirect Speech', route: '/practice/speech-change' },

  // Programming (14)
  { id: 3, type: 'Programming', title: 'C Programming', route: '/practice/c-programming' },
  { id: 4, type: 'Programming', title: 'Data Structures Algorithms', route: '/practice/data-structures' },
  { id: 8, type: 'Programming', title: 'Python', route: '/practice/python' },
  { id: 9, type: 'Programming', title: 'Java', route: '/practice/java' },
  { id: 31, type: 'Programming', title: 'JavaScript', route: '/practice/javascript' },
  { id: 32, type: 'Programming', title: 'Algorithm Complexity', route: '/practice/complexity' },
  { id: 33, type: 'Programming', title: 'Sorting Algorithms', route: '/practice/sorting' },
  { id: 34, type: 'Programming', title: 'Searching Algorithms', route: '/practice/searching' },
  { id: 36, type: 'Programming', title: 'ReactJS MCQs', route: '/practice/reactjs' },
  { id: 37, type: 'Programming', title: 'Node.js Concepts', route: '/practice/nodejs' },
  { id: 38, type: 'Programming', title: 'SQL Queries', route: '/practice/sql-queries' },
  { id: 39, type: 'Programming', title: 'Git Version Control', route: '/practice/git' },

  // Technical (12)
  { id: 5, type: 'Technical', title: 'DBMS & SQL Concepts', route: '/practice/dbms' },
  { id: 6, type: 'Technical', title: 'Operating Systems Concepts', route: '/practice/os' },
  { id: 10, type: 'Technical', title: 'Computer Networks', route: '/practice/computer-networks' },
  { id: 40, type: 'Technical', title: 'Software Engineering', route: '/practice/se-models' },
  { id: 41, type: 'Technical', title: 'Cybersecurity', route: '/practice/cybersecurity' },
  { id: 42, type: 'Technical', title: 'Cloud Computing', route: '/practice/cloud' },
  { id: 43, type: 'Technical', title: 'Compiler Design', route: '/practice/compiler-design' },
  { id: 44, type: 'Technical', title: 'Digital Logic', route: '/practice/digital-logic' },
  { id: 45, type: 'Technical', title: 'Computer Organization', route: '/practice/computer-org' },
];

const filters = ['All', 'Aptitude', 'Programming', 'Technical', 'English'];

const Practice = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // --- Pagination Logic ---
  const itemsPerPage = 8;

  // Filter + Sort data
  const filteredData = filter === 'All'
    ? practiceData
    : practiceData.filter(item => item.type === filter);

  // Sort alphabetically by title
  const sortedData = [...filteredData].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Calculate total pages
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  // Paginate items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // --- Event Handlers ---
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleFilterClick = (category) => {
    setFilter(category);
    setCurrentPage(1);
  };

  return (
    <div className="practice-container">
      <h2 className="practice-heading">Sharpen Your Skills, One Practice at a Time ✨</h2>
      <div className="filters">
        {filters.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="practice-grid">
        {currentItems.map(item => (
          <div key={item.id} className="practice-card">
            <div className="practice-card-content">
              <span className="card-type">{item.type}</span>
              <h3>{item.title}</h3>
              <button
                className="practice-btn"
                onClick={() => navigate(item.route)}
              >
                Practice
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ‹
          </button>
          <span className="page-indicator">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Practice;
