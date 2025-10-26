import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon header', () => {
  render(<App />);
  const headerElement = screen.getByText(/LITTLE LEMON/i);
  expect(headerElement).toBeInTheDocument();
});
