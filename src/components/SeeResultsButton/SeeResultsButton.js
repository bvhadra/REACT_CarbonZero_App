import React from "react";
import questionsList from "../../lib/data";
import { useContext } from "react";
import { TotalContext } from "../../context/TotalContext";
import { Link } from "react-router-dom";
import "./SeeResultsButton.css";


export default function SeeResultsButton({ response, questionIndex, buttonClicked }) {

  const { setTotal } = useContext(TotalContext)

  if (questionIndex !== questionsList.length - 1) {
    return null;
  }

  const handleClick = () => {
    setTotal((prevTotal) => {
      let newTotal = { ...prevTotal };
  
      response.forEach((item) => {
        if (newTotal.hasOwnProperty(item.category)) {
          newTotal[item.category] += item.response;
        }
      });
      return newTotal;
    });
  };
    

  if (questionIndex === questionsList.length - 1 && buttonClicked === true) {
  return (
    <>
    <Link to="/ResultPage">
    <button className="see-results-button" onClick = {handleClick}>
    See Your Results
    </button>
    </Link>
    </>
  )
  }
}
