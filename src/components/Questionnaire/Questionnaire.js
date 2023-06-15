import React, { useState } from "react";
import Button from "../Button/button";
import questionsList from "../../lib/data";
import PreviousButton from "../PreviousButton/PreviousButton";
import SeeResultsButton from "../SeeResultsButton/SeeResultsButton";
 import Results from '../Results/Results'

export default function Questionnaire({ response, setResponse, total, setTotal }) {
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
      <SeeResultsButton total={total} setTotal={setTotal} setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex} />
      <Results response={response}/>
    </>
  );
}
