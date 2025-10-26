import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Little Lemon</h2>
          <p className="text-placeholder">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Text content will be added here. This section describes 
            the history and story of Little Lemon restaurant.
          </p>
        </div>
        <div className="about-images">
          <div className="image-placeholder">Image 1</div>
          <div className="image-placeholder">Image 2</div>
        </div>
      </div>
    </section>
  );
}

export default About;

