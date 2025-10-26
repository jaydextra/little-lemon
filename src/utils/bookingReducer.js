// Initialize available times
export function initializeTimes() {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

// Update available times based on selected date
export function updateTimes(state, action) {
  // For now, return the same available times regardless of date
  // This will be replaced with actual API call later
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
}

