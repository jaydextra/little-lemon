import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import { initializeTimes, updateTimes } from '../utils/bookingReducer';

function MainContent() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  const submitForm = (formData) => {
    // Submit to API
    const submitFunction = typeof window !== 'undefined' && window.submitAPI ? window.submitAPI : null;
    
    if (submitFunction) {
      const success = submitFunction(formData);
      
      if (success) {
        // Navigate to confirmation page with booking data
        navigate('/confirmed', { state: { bookingData: formData } });
        return true;
      }
      return false;
    } else {
      // Fallback for when API is not loaded
      console.log('Form data:', formData);
      navigate('/confirmed', { state: { bookingData: formData } });
      return true;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

function Main() {
  return (
    <main>
      <MainContent />
    </main>
  );
}

export default Main;

