import React from 'react'
import solutions from '../../lib/solutions'
import './Action.css'

import {useParams} from "react-router-dom";

export default function Action() {
  const {id} = useParams()

  const solutionsList = solutions[id].solutions.map((solution, index) => 
      <ul key={index} className="solutions">
        {solution} </ul>
  )

  return (
    <div>{solutionsList}</div>
  
  )
}
