import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-logo-section">
          <div className="footer-logo-container">
            <div className="logo-placeholder" aria-label="Little Lemon Logo">
              <span className="diagonal-lines" aria-hidden="true">✕</span>
            </div>
            <span className="logo-text">LITTLE LEMON</span>
          </div>
          <p className="footer-description">
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
        </div>
        <nav className="doormat-navigation" aria-label="Footer navigation">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

