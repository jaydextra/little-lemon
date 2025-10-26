import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p className="review-text">"Review text goes here..."</p>
          <p className="reviewer-name">Reviewer Name</p>
        </div>
        <div className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p className="review-text">"Review text goes here..."</p>
          <p className="reviewer-name">Reviewer Name</p>
        </div>
        <div className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p className="review-text">"Review text goes here..."</p>
          <p className="reviewer-name">Reviewer Name</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

