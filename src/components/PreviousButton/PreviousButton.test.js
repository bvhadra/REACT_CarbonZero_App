import { render, screen } from "@testing-library/react";
import {test, expect} from "@jest/globals";
import PreviousButton from "../PreviousButton/PreviousButton";
import questionsList from "../../lib/data";


test("Previous button should go back to previous question", function() {
   const setQuestionIndex = jest.fn()
    render(<PreviousButton questionIndex={1} setQuestionIndex={ setQuestionIndex }/>);
    expect(screen.getByText('Previous')).toBeInTheDocument();
}) 