import { initializeTimes, updateTimes } from './bookingReducer';

describe('bookingReducer', () => {
  describe('initializeTimes', () => {
    test('Returns an array of available times', () => {
      const result = initializeTimes();
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    test('Returns times in HH:MM format', () => {
      const result = initializeTimes();
      
      const timePattern = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
      result.forEach(time => {
        expect(time).toMatch(timePattern);
      });
    });

    test('Returns expected time slots', () => {
      const result = initializeTimes();
      
      // Should have multiple time slots
      expect(result.length).toBeGreaterThan(3);
      
      // Check format of each time
      result.forEach(time => {
        expect(typeof time).toBe('string');
        expect(time).toContain(':');
      });
    });
  });

  describe('updateTimes', () => {
    test('Returns array of times for UPDATE_TIMES action', () => {
      const action = { type: 'UPDATE_TIMES', date: '2023-12-25' };
      
      const result = updateTimes(null, action);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    test('Handles different dates', () => {
      const action1 = { type: 'UPDATE_TIMES', date: '2023-12-25' };
      const action2 = { type: 'UPDATE_TIMES', date: '2023-12-26' };
      
      const result1 = updateTimes(null, action1);
      const result2 = updateTimes(null, action2);
      
      expect(Array.isArray(result1)).toBe(true);
      expect(Array.isArray(result2)).toBe(true);
    });

    test('Returns state unchanged for unknown actions', () => {
      const initialState = ['17:00', '18:00'];
      const action = { type: 'UNKNOWN_ACTION' };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toBe(initialState);
    });
  });
});

