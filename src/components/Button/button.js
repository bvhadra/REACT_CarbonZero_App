import React from "react";
import "./button.css"

export default function Button({ data, questionIndex, setQuestionIndex, response, setResponse }) {
  const { answers, question, calculations } = data;
//   console.log(calculations);

  const handleClick = (index) => {
    setQuestionIndex(questionIndex + 1);
    // setResponse([...response, calculations[index]]);
   setResponse(response.map((item, idx) => (idx === questionIndex ? { ...item, response: calculations[index] }  : item)));
    console.log(response);
  };

  const answerList = answers.map((answer, index) => (
    <div key={index}>
      <button onClick={() => handleClick(index)} className="answerButton">
        {answer}
      </button>
    </div>
  ));

  return (
    <>
      <h1 className="questionTitle">{question}</h1>
      {answerList}
    </>
  );
}
