import React from "react";
import logo from "../../assets/logo20.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header-div">
      <ul className="navbar">
        <li>
          <img src={logo} alt="Carbon Zero Logo" className="logo" />
        </li>
        <ul className="navbar-ul">
          <li>
            <Link to="../Rewards/Rewards.js">Rewards</Link>
          </li>
          <li>
            <Link to="../Questionnaire/Questionnaire">Questionnaire</Link>
          </li>
          <li>
            <Link to="../Become a member/Become a member.js">
              Become a member
            </Link>
          </li>
          <li>
            <Link to="../Sign in/Sign in.js">Sign in</Link>
          </li>
        </ul>
      </ul>
      {/* <nav>
        <li>
          <Link to="/actions">Actions</Link>
        </li>
      </nav> */}
    </div>
  );
}

export default Navbar;
