import React from "react";
import logo from "../../assets/logo20.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="header-div">
      <ul className="navbar">
        <li>
          <Link to="/" id="logo-button">
            <img src={logo} alt="Carbon Zero Logo" className="logo" />
          </Link>
        </li>
        <ul className="navbar-ul">
          <li>
            <Link to="../Rewards/Rewards">Rewards</Link>
          </li>
          <li>
            <Link to="../Questionnaire/Questionnaire">Questionnaire</Link>
          </li>
          <li>
            <Link to="../BecomeAMember/BecomeAMember">Become a member</Link>
          </li>
          <li>
            <Link to="../SignIn/SignIn">Sign in</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
