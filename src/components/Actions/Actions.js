import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Button/button.css";

export default function Actions() {
  return (
    <>
      <Navbar />
      <h1> Here are the actions you could take </h1>
      <div className="questionnaire-body">
        <button className="answer-button"> Travel </button>
        <button className="answer-button"> Food </button>
        <button className="answer-button"> Energy </button>
        <button className="answer-button"> Clothing </button>
        </div>
    </>
  );
}
