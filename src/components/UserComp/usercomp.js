import React, { useState } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import questionsList from "../../lib/data";
import Navbar from "../Navbar/Navbar";
import "./usercomp.css"

export default function UserComp() {
  const [response, setResponse] = useState(questionsList);

  const [total, setTotal] = useState({
    travel: 0,
    food: 0,
    energy: 0,
  });

  return (
    <div className="user-component-body">
      <Navbar />
      <Questionnaire
        total={total}
        setTotal={setTotal}
        response={response}
        setResponse={setResponse}
      />
    </div>
  );
}

/*
 const [response, setResponse] = useState(
        questionsList.map((item, index) => ({ id: index, type: questionsList.find(), responseValue: null }))
        */
