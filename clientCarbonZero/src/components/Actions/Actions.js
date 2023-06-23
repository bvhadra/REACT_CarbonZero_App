import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Button/button.css";
import './Actions.css'
import solutions from "../../lib/solutions";
import { Link } from "react-router-dom";

export default function Actions() {
  const solutionsList = solutions.map((categoryTitles) => (
    <Link to={`/Actions/${categoryTitles.id}`}>
      <button key={categoryTitles.id} className="answer-button">
        {categoryTitles.category}
      </button>
    </Link>
  ));
  return (
    <>
      <Navbar />
      <div className="content-container">
        <h1 id="content-container-h1"> Here are the actions you could take </h1>
        <div className="questionnaire-body">{solutionsList}</div>
      </div>
    </>
  );
}

