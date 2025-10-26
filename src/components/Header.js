import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="navigation">
      <Link to="/" className="logo-container">
        <div className="logo-placeholder" aria-label="Little Lemon Logo">
          <span className="diagonal-lines">✕</span>
        </div>
        <span className="logo-text">LITTLE LEMON</span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="nav-links">
          <li><Link to="/" aria-label="Navigate to home page">Home</Link></li>
          <li><Link to="/#about" aria-label="Navigate to about section">About</Link></li>
          <li><Link to="/#menu" aria-label="Navigate to menu section">Menu</Link></li>
          <li><Link to="/booking" aria-label="Navigate to reservations page">Reservations</Link></li>
          <li><Link to="/#order" aria-label="Navigate to order online section">Order Online</Link></li>
          <li><Link to="/#login" aria-label="Navigate to login section">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

