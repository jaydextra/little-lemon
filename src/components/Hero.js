import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Little Lemon</h1>
      <p className="hero-location">New York, New York</p>
      <p className="hero-description">
        Mediterranean food that brings warmth and flavor to your table.
      </p>
      <button className="book-table-btn">Book a Table</button>
    </section>
  );
}

export default Hero;

