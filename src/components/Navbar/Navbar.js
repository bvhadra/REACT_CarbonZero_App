import React from "react";
import logo from "../../assets/logo20.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header-div">
      <ul className="navbar">
        <li>
          <img src={logo} alt="Carbon Zero Logo" className="logo" />
        </li>
        <ul className="navbar-ul">
          <li>
            <a href="../Rewards/Rewards.js">Rewards</a>
          </li>
          <li>
            <a href="../Questionnaire/Questionnaire.js">Questionnaire</a>
          </li>
          <li>
            <a href="../Become a member/Become a member.js">Become a member</a>
          </li>
          <li>
            <a href="../Sign in/Sign in.js">Sign in</a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
