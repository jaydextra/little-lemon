import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo-placeholder">
            <span className="diagonal-lines">✕</span>
          </div>
        </div>
        <div className="doormat-navigation">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>123 Main Street</p>
          <p>Chicago, IL 60601</p>
          <p>Phone: (312) 555-0100</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

