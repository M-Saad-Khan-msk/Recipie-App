import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-icon">☕</span>
          <span className="logo-text">CookCrave</span>
        </div>
        
        <nav className="nav-menu">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-link">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Profiles</Link>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link">Contacts</a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="btn-search" aria-label="Search recipes">
            🔍
          </button>
          <button className="btn-login">Login</button>
        </div>
      </div>
    </header>
  );
};

// Default props
Header.defaultProps = {
  title: "CookCrave",
};

// PropTypes validation
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;