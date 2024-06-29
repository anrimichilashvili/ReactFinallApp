import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Final App</Link></h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/feedback" className="nav-link">Feedback</Link>  
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
    </header>
  );
}

export default Header;
