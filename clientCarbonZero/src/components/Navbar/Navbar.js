import React from "react";
import { useContext } from "react";
import logo from "../../assets/logo20.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { TotalContext } from "../../context/TotalContext";
import { useEffect, useState } from 'react'
import supabase from '../../lib/supabaseclient'

function Navbar() {
  const { setTotal } = useContext(TotalContext)
  const [userSession, setUserSession ] = useState("Sign In")
  const [status, setStatus ] = useState(null)

  const handleClick = () => {
    setTotal({ travel: 0, food: 0, energy: 0, clothing: 0 });
  };

  useEffect(() => {
    const fetchSessions = async () => {
      supabase.auth.getSession().then(session => {
        setUserSession(session.data.session ? "Profile" : "Sign In");
      }).catch(error => {
        console.error(error)
      })
    }    
    
    fetchSessions()
  }, [])


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
          <li onClick={handleClick}>
            <Link to="../Questionnaire">Questionnaire</Link>
          </li>
          {/* <li>
            <Link to="../BecomeAMember">Become a member</Link>
          </li> */}
          <li>
            <Link to="/auth">{userSession}</Link>
          </li>
          <li>
            <Link to="../Rewards">Rewards</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
