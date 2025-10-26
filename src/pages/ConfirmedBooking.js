import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ConfirmedBooking.css';

function ConfirmedBooking() {
  const location = useLocation();
  const bookingData = location.state?.bookingData || {};

  return (
    <div className="confirmed-booking">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        <p>Your reservation has been successfully confirmed.</p>
        
        <div className="booking-details">
          <h2>Booking Details</h2>
          {bookingData.date && (
            <div className="detail-row">
              <strong>Date:</strong> <span>{bookingData.date}</span>
            </div>
          )}
          {bookingData.time && (
            <div className="detail-row">
              <strong>Time:</strong> <span>{bookingData.time}</span>
            </div>
          )}
          {bookingData.guests && (
            <div className="detail-row">
              <strong>Guests:</strong> <span>{bookingData.guests}</span>
            </div>
          )}
          {bookingData.occasion && (
            <div className="detail-row">
              <strong>Occasion:</strong> <span>{bookingData.occasion}</span>
            </div>
          )}
        </div>

        <p className="confirmation-message">
          We look forward to welcoming you to Little Lemon!
        </p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;

