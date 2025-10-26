import React, { useState } from 'react';
import '../styles/BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
  // State for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  // Handle date change and dispatch available times update
  const handleDateChange = (e) => {
    setDate(e.target.value);
    // Dispatch the date to update available times
    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data for now
    console.log('Form submitted:', {
      date,
      time,
      guests,
      occasion
    });
    
    // Reset form after submission
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
    
    // Show success message (can be replaced with actual submission logic)
    alert('Reservation submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;

