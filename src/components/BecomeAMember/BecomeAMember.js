import React from "react";
import Navbar from "../Navbar/Navbar";
import "./BecomeAMember.css"
import { Link } from "react-router-dom";

export default function BecomeAMember() {
  return (
    <>
      <Navbar />
      <main className="become-a-member-main">
        <h1>Become A Member</h1>
        <div className="white-box">
          <h2>Sign up here to get access to your account, profile and use our app!</h2>
        </div>
        <button className="register">
          <Link to="../BecomeAMember" id="become-a-member">
            Register
          </Link>
        </button>
      </main>
    </>
  );
}





