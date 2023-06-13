import React from "react";

export default function Button({ data, questionIndex, setQuestionIndex, response, setResponse }) {
  const { answers, question, calculations } = data;
  console.log(calculations);

  const handleClick = (index) => {
    setQuestionIndex(questionIndex + 1);
    setResponse([...response, calculations[index]]);
    console.log(index);
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
