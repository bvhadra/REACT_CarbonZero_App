import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import questionsList from "../../lib/data";
import PreviousButton from "../PreviousButton/PreviousButton";
import SeeResultsButton from "../SeeResultsButton/SeeResultsButton";
// import Results from '../Results/Results'
import "./Questionnaire.css"
import ProgressBar from "../ProgressBar/ProgressBar";


export default function Questionnaire({ response, setResponse}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (buttonClicked === true) {
      setCompleted(100);
    }
    else {
      const completionPercentage = Math.floor(((questionIndex) / questionsList.length) * 100);
      setCompleted(completionPercentage);
    }
  }, [questionIndex, buttonClicked]);
  

  return (
    <div className="questionnaire-body">
      <Button
        data={questionsList[questionIndex]}
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
        response={response}
        setResponse={setResponse}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
<div className="previous-button-and-results-button">
      <PreviousButton
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
      />

      <SeeResultsButton setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex} response={response} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>

</div>

<ProgressBar bgcolor={"#29524a"} completed={completed} />
    </div>
  );
}
