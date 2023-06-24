import React from 'react'
import solutions from '../../lib/solutions'
import Navbar from '../Navbar/Navbar';
import './Action.css'
import {useParams} from "react-router-dom";
import ReminderIcon from '../ReminderBell/ReminderBell';
import amazon from "../../assets/amazon-forest.png";
import { Link } from 'react-router-dom';

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
  

//...
return (
  <>
    <Navbar />
    <div className="main-grid">
      <div className="title">
        <h2> How can you improve your {solutions[id].category} </h2>
      </div>
      <div className="content">
        <div className="content-text">
          <ul>{solutionsList}</ul>
          <button className="previous-button" id='back-to-actions'>
            <Link to="../Actions">Back</Link>
          </button>
        </div>
        <div className="content-image">
          <img src={amazon} alt="deforestation" />
        </div>
      </div>
    </div>
  </>
);
//...

}



