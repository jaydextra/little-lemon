import React from 'react';
import ReservationDemo from '../components/ReservationDemo';
import '../styles/BookingPage.css';

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>Book your dining experience at Little Lemon</p>
      </div>
      <ReservationDemo />
    </div>
  );
}

export default BookingPage;

