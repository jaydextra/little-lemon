import React from 'react';
import BookingForm from '../components/BookingForm';
import '../styles/BookingPage.css';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>Book your dining experience at Little Lemon</p>
      </div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;

