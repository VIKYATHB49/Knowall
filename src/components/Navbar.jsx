import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check for token on mount
  useEffect(() => {
    const token = localStorage.getItem('jwtToken'); // ✅ unified key
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleMenu = () => setIsOpen(open => !open);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); // ✅ clears unified key
    setIsAuthenticated(false);
    closeMenu();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} alt="Knowall Logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger / Close Icon */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="icon-close">✕</span>
        ) : (
          <>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </>
        )}
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/assessments" onClick={closeMenu}>Assessments</Link>
        <Link to="/courses" onClick={closeMenu}>Courses</Link>
        <Link to="/practice" onClick={closeMenu}>Practice</Link>
        <Link to="/blogs" onClick={closeMenu}>Blogs</Link>

        {/* Conditional: Dashboard only if logged in */}
        {isAuthenticated && (
          <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        )}

        <div className="navbar-actions">
          {isAuthenticated ? (
            <button className="btn logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" onClick={closeMenu}>
                <button className="btn signup">Signup</button>
              </Link>
              <Link to="/login" onClick={closeMenu}>
                <button className="btn login">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
