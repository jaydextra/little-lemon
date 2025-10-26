import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <nav className="navigation">
      <div className="logo-container">
        <div className="logo-placeholder">
          <span className="diagonal-lines">✕</span>
        </div>
        <span className="logo-text">LITTLE LEMON</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Header;

