import React from 'react';
import '../styles/ReservationDemo.css';
import OccasionDropdown from './OccasionDropdown';

import { Link } from 'react-router-dom';

function ReservationDemo() {
  return (
    <section className="reservation-demo">
      <h2>Make a Reservation</h2>
      <div className="demo-container">
        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" />
        </div>
        <div className="form-group">
          <label>Number of Guests</label>
          <input type="number" min="1" max="12" />
        </div>
        <OccasionDropdown />
        <Link to="/booking" className="reserve-button-link">
          <button className="reserve-button">Reserve Now</button>
        </Link>
      </div>
    </section>
  );
}

export default ReservationDemo;

