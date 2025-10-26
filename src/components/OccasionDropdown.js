import React, { useState } from 'react';
import '../styles/OccasionDropdown.css';

function OccasionDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  const occasions = ['Birthday', 'Engagement', 'Anniversary'];

  const handleSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">Select occasion</label>
      <div className="dropdown-wrapper">
        <button 
          className={`dropdown-button ${selectedOccasion ? 'selected' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOccasion || 'Occasion'}</span>
          <span className={`chevron ${isOpen ? 'open' : ''}`}>▼</span>
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
            {occasions.map((occasion) => (
              <div
                key={occasion}
                className={`dropdown-item ${selectedOccasion === occasion ? 'active' : ''}`}
                onClick={() => handleSelect(occasion)}
              >
                {occasion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OccasionDropdown;

