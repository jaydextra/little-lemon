import React from 'react';
import BookingForm from '../components/BookingForm';
import '../styles/BookingPage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>Book your dining experience at Little Lemon</p>
      </div>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm}
        onCancel={() => window.history.back()}
      />
    </div>
  );
}

export default BookingPage;

