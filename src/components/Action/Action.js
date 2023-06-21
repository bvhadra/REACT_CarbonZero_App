import React from 'react'
import solutions from '../../lib/solutions'
import {useParams} from "react-router-dom";

export default function Action() {
  const {id} = useParams()

  const solutionsList = solutions[id].solutions.map((solution, index) => 
      <ul key={index} className="answer-button">
        {solution} </ul>
  )

  return (
    <div>{solutionsList}</div>
  
  )
}
