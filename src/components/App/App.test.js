import { render, screen } from '@testing-library/react';
import App from './App';

test('Food Waste', () => {
  render(<App />);
  const linkElement = screen.getByText(/Food Waste/i);
  expect(linkElement).toBeInTheDocument();
});
