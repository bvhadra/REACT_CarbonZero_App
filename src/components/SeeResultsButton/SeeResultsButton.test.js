import { render, screen } from "@testing-library/react";
import {test, expect} from "@jest/globals";
import SeeResultsButton from "../SeeResultsButton/SeeResultsButton";
import questionsList from "../../lib/data";

test("SeeResultsButton should not appear on the first few questions", function() {
  // Render component for first question
render(<SeeResultsButton questionIndex={0} />);
  // Verify that the button doesn't exist
  expect(screen.queryByText('See Your Results')).toBeNull();
});

test("SeeResultsButton should only appear on the last question", function() {
    // Render component for first question
  render(<SeeResultsButton questionIndex={questionsList.length - 1} />);
    // Verify that the button doesn't exist
    expect(screen.getByText('See Your Results')).toBeInTheDocument();
  });

//   // Render component for last question
//   queryByText = render(<SeeResultsButton questionIndex={questionsList.length - 1} />).queryByText;
//   // Verify that the button exists
//   expect(screen.queryByText('See Your Results')).not.toBeNull();