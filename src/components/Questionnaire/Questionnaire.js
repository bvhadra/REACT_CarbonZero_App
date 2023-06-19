import React, { useState } from "react";
import Button from "../Button/button";
import questionsList from "../../lib/data";
import PreviousButton from "../PreviousButton/PreviousButton";
import SeeResultsButton from "../SeeResultsButton/SeeResultsButton";
import Results from '../Results/Results'
import "./Questionnaire.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function Questionnaire({ response, setResponse}) {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className="questionnaire-body">
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
      <SeeResultsButton setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex} response={response}/>
   
      {/* <Results response={response} total={total}/> */}

    </div>
  );
}
