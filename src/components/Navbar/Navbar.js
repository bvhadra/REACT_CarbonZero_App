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
        <li>
          <span class="material-symbols-outlined">Menu</span>
        </li>
        <ul className="navbar-ul">
          <li>
            <Link to="../Rewards">Rewards</Link>
          </li>
          <li>
            <Link to="../Questionnaire">Questionnaire</Link>
          </li>
          <li>
            <Link to="../BecomeAMember">Become a member</Link>
          </li>
          <li>
            <Link to="../SignIn">Sign in</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
