import React from "react";
import questionsList from "../../lib/data";
import { useContext } from "react";
import { TotalContext } from "../../context/TotalContext";
import { Link } from "react-router-dom";



export default function SeeResultsButton({ response, questionIndex }) {

  const { total, setTotal } = useContext(TotalContext)

  if (questionIndex !== questionsList.length - 1) {
    return null;
  }

  // Initialise the total as an object
  // Note: This should actually be done in the component's state where `total` is declared.
  // total = {travel: 0, food: 0, energy: 0}

  const handleClick = () => {
    setTotal((prevTotal) => {
      let newTotal = { ...prevTotal };
  
      response.forEach((item) => {
        if (newTotal.hasOwnProperty(item.category)) {
          newTotal[item.category] += item.response;
        }
      });
  
      if (JSON.stringify(newTotal) !== JSON.stringify(prevTotal)) {
        return newTotal;
      }

    });
  };
    
    
  return (
    <>
    <button className="see-results-button" onClick = {handleClick}>See Your Results</button>
    <button>
    <Link to="../ResultPage">Go To Page</Link>
    </button>
    </>
  )
}


