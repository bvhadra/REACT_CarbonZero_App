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

test("renders Travel Miles", () => {
  render(<Home />);
  const sectionElement = screen.getByText(/Travel Miles/i);
  expect(sectionElement).toBeInTheDocument();
});

test("renders Energy Consumption", () => {
  render(<Home />);
  const sectionElement = screen.getByText(/Energy Consumption/i);
  expect(sectionElement).toBeInTheDocument();
});

