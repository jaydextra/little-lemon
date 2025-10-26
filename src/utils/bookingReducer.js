// Helper function to get fetchAPI
function getFetchAPI() {
  if (typeof window !== 'undefined' && window.fetchAPI) {
    return window.fetchAPI;
  }
  if (typeof global !== 'undefined' && global.fetchAPI) {
    return global.fetchAPI;
  }
  return null;
}

// Initialize available times using API
export function initializeTimes() {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Call fetchAPI function from the external API
  const fetchAPI = getFetchAPI();
  
  if (fetchAPI) {
    return fetchAPI(today);
  }
  
  // Fallback to default times if API is not loaded yet
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
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Use the date from the action to fetch available times
      const date = action.date || new Date().toISOString().split('T')[0];
      
      // Call fetchAPI function from the external API
      const fetchAPI = getFetchAPI();
      
      if (fetchAPI) {
        return fetchAPI(date);
      }
      
      // Fallback to state if API is not loaded
      return state || [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
    default:
      return state;
  }
}

