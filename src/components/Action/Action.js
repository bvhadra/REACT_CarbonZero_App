import React from 'react'
import solutions from '../../lib/solutions'
import Navbar from '../Navbar/Navbar';
import './Action.css'
import {useParams} from "react-router-dom";
import ReminderIcon from '../ReminderBell/ReminderBell';

export default function Action() {
  const {id} = useParams()

  const solutionsList = solutions[id].solutions.map((solution, index) => (
    <li key={index} className="solutions">
      <span className="reminder-icon-wrapper">
        <ReminderIcon solution={solution} />
      </span>
      {solution}
    </li>
  ));
  

  return (
    <>
    <Navbar />
    <h1 className="action-title"> How can you improve your {solutions[id].category} </h1>

    <ul className = "solutions-list">{solutionsList}</ul>
    </>
  )
}

