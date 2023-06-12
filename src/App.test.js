import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linklement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTxt(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});