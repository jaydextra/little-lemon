import React, { useState } from 'react';
import '../styles/BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // State for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  
  // State for validation errors
  const [errors, setErrors] = useState({});
  
  // Check if form is valid
  const isFormValid = () => {
    return date && time && guests && occasion && 
           parseInt(guests) >= 1 && parseInt(guests) <= 10 &&
           !errors.date && !errors.guests;
  };
  
  // Validate date (should be today or in the future)
  const validateDate = (dateValue) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(dateValue);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return 'Please select today or a future date';
    }
    return null;
  };
  
  // Validate guests
  const validateGuests = (guestsValue) => {
    const numGuests = parseInt(guestsValue);
    if (isNaN(numGuests) || numGuests < 1) {
      return 'Please enter at least 1 guest';
    }
    if (numGuests > 10) {
      return 'Maximum 10 guests allowed';
    }
    return null;
  };
  
  // Handle date change and dispatch available times update
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    
    // Validate date
    const dateError = validateDate(newDate);
    if (dateError) {
      setErrors(prev => ({ ...prev, date: dateError }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.date;
        return newErrors;
      });
    }
    
    // Dispatch the date to update available times
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };
  
  // Handle guests change
  const handleGuestsChange = (e) => {
    const newGuests = e.target.value;
    setGuests(newGuests);
    
    // Validate guests
    const guestsError = validateGuests(newGuests);
    if (guestsError) {
      setErrors(prev => ({ ...prev, guests: guestsError }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.guests;
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare form data
    const formData = {
      date,
      time,
      guests: parseInt(guests),
      occasion
    };
    
    // Call the submitForm function passed from parent
    if (submitForm) {
      const success = submitForm(formData);
      
      if (success) {
        // Reset form after successful submission
        setDate('');
        setTime('');
        setGuests('');
        setOccasion('');
      }
    }
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
          min={new Date().toISOString().split('T')[0]}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {errors.date && <span className="error-message" id="date-error" role="alert">{errors.date}</span>}
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
          onChange={handleGuestsChange}
          required
          aria-describedby={errors.guests ? "guests-error" : undefined}
        />
        {errors.guests && <span className="error-message" id="guests-error" role="alert">{errors.guests}</span>}
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

      <button 
        type="submit" 
        className="submit-button"
        disabled={!isFormValid()}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;

