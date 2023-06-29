import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import "../Navbar/Navbar.css"
import foot from "../../assets/foot1433.png";
import amazon from "../../assets/amazon-forest.png";
import travel from "../../assets/air-travel.png";
import industry from "../../assets/industrial-polution.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TotalContext } from "../../context/TotalContext";
//import GetGraph from '../GetGraph/GetGraph'
// import PostGraph from '../PostGraph/PostGraph'

function Home() {
  const { setTotal } = useContext(TotalContext)
  const handleClick = () => {
    setTotal({ travel: 0, food: 0, energy: 0, clothing: 0 });
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="section-1">
          <h1 className="section-1-h1">
            How big is your environmental footprint?
          </h1>
          <img
            src={foot}
            alt="Carbon Footprint"
            className="section-1-footprint"
          />
          <button onClick={handleClick} className="section-1-button">
            <Link to="../Questionnaire" id="learn-more">
              Learn more...
            </Link>
          </button>
        </section>
        <section className="section-2">
          <img src={amazon} alt="" className="section-2-img" />
          <h2 className="section-2-h2">Food Waste</h2>
          <h4 className="section-2-h4">
            1/3 of all food produced for human consumption is wasted.
            <br />
            <br />
            This accounts for 8% of global greenhouse gas emissions.
          </h4>
        </section>
        <section className="section-3">
          <h2 className="section-3-h2">Travel Miles</h2>
          <h4 className="section-3-h4">
            A round-trip flight from New York to London emits as much CO2 as heating a home for a year.
            <br />
            <br />
            Aviation accounts for 2% of global carbon emissions.
          </h4>
          <img src={travel} alt="aeroplane flying" className="section-3-img" />
        </section>
        <section className="section-4">
          <img
            src={industry}
            alt="industrial waste"
            className="section-4-img"
          />
          <h2 className="section-4-h2">Energy Consumption</h2>
          <h4 className="section-4-h4">
          Burning enough coal to power a home for a day produces 40 pounds of CO2.
            <br />
            <br />
            Coal is responsible for 30% of total carbon emissions.
          </h4>
        </section>
      </main>

      <section className="subscribe-1">
        <h2 className="subscribe-1-h2">Join Our Mission</h2>
        <input
          type="text"
          className="subscribe-1-input"
          placeholder="Enter your email here..."
        />
        <button className="subscribe-1-submit">
          <Link to={"/"}>Subscribe</Link>
        </button>
      </section>
    </>
  );
}

export default Home;
