import { initializeTimes, updateTimes } from '../utils/bookingReducer';

describe('Booking Reducer Functions', () => {
  describe('initializeTimes', () => {
    test('Returns the correct initial available times', () => {
      const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
      
      const result = initializeTimes();
      
      expect(result).toEqual(expectedTimes);
      expect(result).toHaveLength(6);
    });

    test('Returns an array of times', () => {
      const result = initializeTimes();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    test('All times are in HH:MM format', () => {
      const result = initializeTimes();
      const timePattern = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
      
      result.forEach(time => {
        expect(time).toMatch(timePattern);
      });
    });
  });

  describe('updateTimes', () => {
    test('Returns the same value when state is provided', () => {
      const testState = ['17:00', '18:00', '19:00'];
      const action = { type: 'UPDATE_TIMES', date: '2023-12-25' };
      
      const result = updateTimes(testState, action);
      
      // For now, it should return initialized times (all available)
      expect(result).toEqual(initializeTimes());
    });

    test('Handles UPDATE_TIMES action', () => {
      const initialState = ['17:00', '18:00'];
      const action = { type: 'UPDATE_TIMES', date: '2023-12-25' };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(initializeTimes());
      expect(result.length).toBe(6);
    });

    test('Returns state unchanged for unknown action types', () => {
      const initialState = ['17:00', '18:00'];
      const action = { type: 'UNKNOWN_ACTION' };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toBe(initialState);
    });

    test('Returns initialized times regardless of date', () => {
      const action1 = { type: 'UPDATE_TIMES', date: '2023-12-25' };
      const action2 = { type: 'UPDATE_TIMES', date: '2023-12-26' };
      
      const result1 = updateTimes(null, action1);
      const result2 = updateTimes(null, action2);
      
      // Both should return the same initialized times
      expect(result1).toEqual(result2);
      expect(result1).toEqual(initializeTimes());
    });
  });
});

