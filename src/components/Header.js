import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="navigation">
      <div className="logo-container">
        <div className="logo-placeholder" aria-label="Little Lemon Logo">
          <span className="diagonal-lines">✕</span>
        </div>
        <span className="logo-text">LITTLE LEMON</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

