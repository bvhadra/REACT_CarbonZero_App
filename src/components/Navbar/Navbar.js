import React from "react";
import logo from "../../assets/Z-5.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header-div">
      <img src={logo} alt="Carbon Zero Logo" className="logo" />
      <ul className="navbar">
        <li>
          <a href="../Rewards/Rewards.js">Rewards</a>
        </li>
        <li>
          <a href="../Questionnaire/Questionnaire.js">Questionaire</a>
        </li>
        <li>
          <a href="../Become a member/Become a member.js">Become a member</a>
        </li>
        <li>
          <a href="../Sign in/Sign in.js">Sign in</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
