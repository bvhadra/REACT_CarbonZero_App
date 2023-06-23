import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./SignIn.css";


export default function SignIn() {
  return (
    <>
      <Navbar />
      <main className="signin-main">
        <h1>Sign In Page</h1>
        <div className="white-box">
          <h2>
            Get some rewards now for your hardwork towards saving the planet!
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
