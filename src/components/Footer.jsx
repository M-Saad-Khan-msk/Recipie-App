import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <div className="logo">
            <span className="logo-icon">☕</span>
            <span className="logo-text">CookCrave</span>
          </div>
          <p className="about-text">
            CookCrave is your ultimate destination for culinary inspiration. Discover, share, and master recipes from around the globe.
          </p>
        </div>

        <div className="footer-section footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="links-list">
            <li><a href="#recipes" className="footer-link">Recipes</a></li>
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
            <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i> {/* Use a library like Font Awesome for icons */}
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} CookCrave. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;