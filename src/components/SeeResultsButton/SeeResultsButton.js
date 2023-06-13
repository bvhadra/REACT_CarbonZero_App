import React from 'react'
import questionsList from '../../lib/data'
import {Link} from "react-router-dom";

export default function SeeResultsButton({questionIndex, setQuestionIndex}) {

    if (questionIndex !== questionsList.length - 1) {
        return null
    }

    const handleClick = () => {
        <Link to={`/results`}> </Link>
    }
    
  return (
    <button onClick = {handleClick}>Previous</button>
  )
  }
