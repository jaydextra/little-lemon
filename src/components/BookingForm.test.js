import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

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

