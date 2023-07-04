import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Rewards.css"
import { Link } from "react-router-dom";

export default function Rewards() {
  return (
    <>
      <Navbar />
      <main className="rewards-main">
        <h1>My Rewards</h1>
        <div className="rewards-white-box">
          <h2>Get some rewards now for your hardwork towards saving the planet!</h2>
        </div>
        <button className="my-rewards">
          <Link to="../Rewards" id="my-rewards">
            My rewards
          </Link>
        </button>
      </main>
    </>
  );
}