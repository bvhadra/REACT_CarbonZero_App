import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import questionsList from "../../lib/data";
import PreviousButton from "../PreviousButton/PreviousButton";
import SeeResultsButton from "../SeeResultsButton/SeeResultsButton";
import Results from '../Results/Results'
import "./Questionnaire.css"
import ProgressBar from "../ProgressBar/ProgressBar";


export default function Questionnaire({ response, setResponse}) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [completed, setCompleted] = useState(0);

  // useEffect(() => {
  //   if (questionIndex === questionsList.length - 1) {
  //     setCompleted(100);
  //   }
  //   setCompleted(Math.floor((questionIndex / (questionsList.length) * 100)));
  // }, [questionIndex]);

  useEffect(() => {
    if (questionIndex === questionsList.length - 1) {
      setCompleted(100);
    } else {
      const completionPercentage = Math.floor(((questionIndex) / questionsList.length) * 100);
      setCompleted(completionPercentage);
    }
  }, [questionIndex]);
  

  return (
    <div className="questionnaire-body">
      <Button
        data={questionsList[questionIndex]}
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
        response={response}
        setResponse={setResponse}
      />
<div className="previous-button-and-results-button">
      <PreviousButton
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
      />

      <SeeResultsButton setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex} response={response}/>

</div>

<ProgressBar bgcolor={"#29524a"} completed={completed} />
    </div>
  );
}
