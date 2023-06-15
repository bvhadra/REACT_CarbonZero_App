import React from 'react'
import questionsList from '../../lib/data'
// import {Link} from "react-router-dom";

export default function SeeResultsButton({questionIndex, total, setTotal}) {

    if (questionIndex !== questionsList.length - 1) {
        return null
    }

    const handleClick = () => {
        // <Link to={`/results`}> </Link>
        questionsList.forEach((item, index) => {
          if(questionsList.category === "travel") {

            // setTotal(total.find(()))
            
          }

        })
        return console.log("SeeResultsButton clicked")
    }
    
  return (
    <button className="see-results-button" onClick = {handleClick}>See Your Results</button>
  )
  }
