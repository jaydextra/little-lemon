import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <nav className="navigation">
      <div className="logo">
        <div className="logo-placeholder">
          <span className="diagonal-lines">✕</span>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Header;

