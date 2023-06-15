import React from 'react'

function PreviousButton({questionIndex, setQuestionIndex}) {

    if (questionIndex === 0) {
        return null
    }

    const handleClick = () => {
        setQuestionIndex(questionIndex - 1)
    }
    
  return (
    <button onClick = {handleClick}>Previous</button>
  )
}

export default PreviousButton