import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
  });

  describe('Static Content', () => {
    test('Renders the "Choose date" label', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const dateLabel = screen.getByText('Choose date');
      expect(dateLabel).toBeInTheDocument();
    });

    test('Renders the "Choose time" label', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const timeLabel = screen.getByText('Choose time');
      expect(timeLabel).toBeInTheDocument();
    });

    test('Renders the "Number of guests" label', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsLabel = screen.getByText('Number of guests');
      expect(guestsLabel).toBeInTheDocument();
    });

    test('Renders the "Occasion" label', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const occasionLabel = screen.getByText('Occasion');
      expect(occasionLabel).toBeInTheDocument();
    });

    test('Renders the "Make Your Reservation" submit button', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const submitButton = screen.getByText('Make Your Reservation');
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe('HTML5 Validation', () => {
    test('Date input has required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const dateInput = screen.getByLabelText('Choose date');
      expect(dateInput).toHaveAttribute('required');
    });

    test('Date input has min attribute set to today', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const dateInput = screen.getByLabelText('Choose date');
      expect(dateInput).toHaveAttribute('min');
    });

    test('Time select has required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const timeSelect = screen.getByLabelText('Choose time');
      expect(timeSelect).toHaveAttribute('required');
    });

    test('Guests input has required, min, and max attributes', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsInput = screen.getByLabelText('Number of guests');
      expect(guestsInput).toHaveAttribute('required');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('Occasion select has required attribute', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const occasionSelect = screen.getByLabelText('Occasion');
      expect(occasionSelect).toHaveAttribute('required');
    });
  });

  describe('JavaScript Validation', () => {
    test('Submit button is disabled when form is empty', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      expect(submitButton).toBeDisabled();
    });

    test('Submit button is disabled when date is in the past', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      const dateInput = screen.getByLabelText('Choose date');
      
      // Set a past date
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      fireEvent.change(dateInput, { target: { value: yesterday.toISOString().split('T')[0] } });
      
      expect(submitButton).toBeDisabled();
    });

    test('Submit button is enabled when all fields are valid', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      
      // Get form fields
      const dateInput = screen.getByLabelText('Choose date');
      const timeSelect = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionSelect = screen.getByLabelText('Occasion');
      
      // Fill in valid data
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      fireEvent.change(dateInput, { target: { value: tomorrow.toISOString().split('T')[0] } });
      fireEvent.change(timeSelect, { target: { value: '18:00' } });
      fireEvent.change(guestsInput, { target: { value: '2' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      
      expect(submitButton).not.toBeDisabled();
    });

    test('Shows error message when guests is less than 1', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsInput = screen.getByLabelText('Number of guests');
      
      fireEvent.change(guestsInput, { target: { value: '0' } });
      
      expect(screen.getByText(/please enter at least 1 guest/i)).toBeInTheDocument();
    });

    test('Shows error message when guests is more than 10', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const guestsInput = screen.getByLabelText('Number of guests');
      
      fireEvent.change(guestsInput, { target: { value: '11' } });
      
      expect(screen.getByText(/maximum 10 guests allowed/i)).toBeInTheDocument();
    });

    test('Shows error message when date is in the past', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      const dateInput = screen.getByLabelText('Choose date');
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      fireEvent.change(dateInput, { target: { value: yesterday.toISOString().split('T')[0] } });
      
      expect(screen.getByText(/please select today or a future date/i)).toBeInTheDocument();
    });
  });

  describe('Form Submission', () => {
    test('Calls submitForm with correct data when form is submitted', () => {
      mockSubmitForm.mockReturnValue(true);
      
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const dateInput = screen.getByLabelText('Choose date');
      const timeSelect = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionSelect = screen.getByLabelText('Occasion');
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      
      // Fill in valid data
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      fireEvent.change(dateInput, { target: { value: tomorrow.toISOString().split('T')[0] } });
      fireEvent.change(timeSelect, { target: { value: '18:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      
      fireEvent.click(submitButton);
      
      expect(mockSubmitForm).toHaveBeenCalledWith({
        date: tomorrow.toISOString().split('T')[0],
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      });
    });

    test('Dispatches UPDATE_TIMES when date changes', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const dateInput = screen.getByLabelText('Choose date');
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split('T')[0];
      
      fireEvent.change(dateInput, { target: { value: tomorrowString } });
      
      expect(mockDispatch).toHaveBeenCalledWith({ 
        type: 'UPDATE_TIMES', 
        date: tomorrowString 
      });
    });
  });
});

