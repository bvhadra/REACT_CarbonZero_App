import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";

// visibility: testing for text contents expected to be visible to users on the home page Navbar area.
test("renders Rewards", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Rewards/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders Questionnaire", () => {
 render(<Navbar />);
  const linkElement = screen.getByText(/Questionnaire/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders Become a member", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Become a member/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders Sign in", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});


