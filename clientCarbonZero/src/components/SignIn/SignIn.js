import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <main className="signin-main">
        <h1>Sign In</h1>
        <div className="signin-white-box">
          <h2>
            To sign in to your account, you need to enter your username and
            password here.
          </h2>
        </div>
        <button className="login">
          <Link to="../SignIn" id="login">
            Log in
          </Link>
        </button>
      </main>
    </>
  );
}
