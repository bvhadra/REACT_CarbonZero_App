import React, { useState } from "react";
import Button from "../Button/button";
import questionsList from "../../lib/data";
import PreviousButton from "../PreviousButton/PreviousButton";

export default function Questionnaire({ response, setResponse }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <Button
        data={questionsList[questionIndex]}
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
        response={response}
        setResponse={setResponse}
      />

      <PreviousButton
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
      />
    </>
  );
}
