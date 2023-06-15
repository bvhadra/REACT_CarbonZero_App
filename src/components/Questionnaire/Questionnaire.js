import React, { useState } from "react";
import Button from "../Button/button";
import questionsList from "../../lib/data";
import PreviousButton from "../PreviousButton/PreviousButton";
import SeeResultsButton from "../SeeResultsButton/SeeResultsButton";
import "./Questionnaire.css"
// import Navbar from "../Navbar/Navbar";
// import Results from '../Results/Results'

export default function Questionnaire({ response, setResponse, total, setTotal }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className="questionnaire-body">
      {/* <Navbar /> */}
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
      <SeeResultsButton total={total} setTotal={setTotal} />
      {/* <Results /> */}
    </div>
  );
}
