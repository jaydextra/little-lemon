import React from 'react';
import '../styles/Highlights.css';

function Highlights() {
  return (
    <section className="highlights">
      <h2>Weekly Specials</h2>
      <div className="highlights-container">
        <div className="dish-card">
          <div className="dish-image-placeholder">Image</div>
          <h3 className="dish-name">Dish Name</h3>
          <p className="dish-description">Dish description goes here...</p>
          <p className="dish-price">$XX.XX</p>
        </div>
        <div className="dish-card">
          <div className="dish-image-placeholder">Image</div>
          <h3 className="dish-name">Dish Name</h3>
          <p className="dish-description">Dish description goes here...</p>
          <p className="dish-price">$XX.XX</p>
        </div>
        <div className="dish-card">
          <div className="dish-image-placeholder">Image</div>
          <h3 className="dish-name">Dish Name</h3>
          <p className="dish-description">Dish description goes here...</p>
          <p className="dish-price">$XX.XX</p>
        </div>
      </div>
      <button className="order-online-btn">Order Online</button>
    </section>
  );
}

export default Highlights;

