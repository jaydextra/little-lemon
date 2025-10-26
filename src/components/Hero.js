import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Little Lemon</h1>
          <p className="hero-location">Restaurant</p>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
          <button className="book-table-btn" aria-label="On Click">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder" aria-label="Hero image placeholder">
            <span aria-hidden="true">✕ Image placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

