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
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/#order">Order Online</Link></li>
          <li><Link to="/#login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

