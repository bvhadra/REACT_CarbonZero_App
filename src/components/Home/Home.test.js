import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";

test("renders How big is your environmental footprint?", () => {
  render(<Home />);
  const headingElement = screen.getByText(
    /How big is your environmental footprint/i
  );
  expect(headingElement).toBeInTheDocument();
});

test("renders Join Our Mission", () => {
  render(<Home />);
  const footerElement = screen.getByText(/Join Our Mission/i);
  expect(footerElement).toBeInTheDocument();
});


