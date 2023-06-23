import React from 'react'
import "./PreviousButton.css"

function PreviousButton({questionIndex, setQuestionIndex}) {

    if (questionIndex === 0) {
        return null
    }

    const handleClick = () => {
        setQuestionIndex(questionIndex - 1)
    }
    
  return (
    <button className="previous-button" onClick = {handleClick}>Previous</button>
  )
}

export default PreviousButton