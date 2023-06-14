import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";

// visibility: testing for text contents expected to be visible to users on the home page.
test("renders How big is your environmental footprint?", () => {
  render(<Home />);
  const headingElement = screen.getByText(
    /How big is your environmental footprint/i
  );
  expect(headingElement).toBeInTheDocument();
});

test("renders Learn more...", () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Learn more/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders Join Our Mission", () => {
  render(<Home />);
  const footerElement = screen.getByText(/Join Our Mission/i);
  expect(footerElement).toBeInTheDocument();
});

test("renders Enter your email here...", () => {
  render(<Home />);
  const inputElement = screen.getAllByPlaceholderText(/Enter your email here/i);
  expect(inputElement).toBeInTheDocument();
});

test("renders Subscribe", () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Subscribe/i);
  expect(buttonElement).toBeInTheDocument();
});



