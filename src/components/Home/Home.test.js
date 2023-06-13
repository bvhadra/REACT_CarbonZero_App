import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";

test("renders How big is your environmental footprint?", () => {
  render(<Home />);
  const linkElement = screen.getByText(
    /How big is your environmental footprint/i
  );
  expect(linkElement).toBeInTheDocument();
});


