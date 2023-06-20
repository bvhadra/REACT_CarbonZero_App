import React, { useState } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import questionsList from "../../lib/data";
import Navbar from "../Navbar/Navbar";
import "./usercomp.css"


export default function UserComp() {
  const [response, setResponse] = useState(questionsList);

  return (
    <div className="user-component-body">

      <Navbar />
      <Questionnaire
        response={response}
        setResponse={setResponse}
      />
    </div>
  );
}