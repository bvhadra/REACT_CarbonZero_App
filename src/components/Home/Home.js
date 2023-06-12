import React from 'react';
import Navbar from '../Navbar/Navbar'
//import footp.jpeg from '../assets';

function Home() {
 
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="section-1">
        <h1 className="section-1-h1">
          How big is your environmental footprint
        </h1>
        <img
          src="src/assets/foot.png"
          alt="Carbon Footprint"
          className="footprint"
        ></img>
        <button>Learn more...</button>
      </section>
      <section className="section-2">
        <img src="" alt="" className=""></img>
        <h2 className="section-2-h2">Food Waste</h2>
        <h4 className="section-2-h4">
          1/3 of all food produced for human consumption is wasted.
        </h4>
        <h4 className="section-2-h4">
          This accounts for 8% of global greenhouse gas emissions.
        </h4>
      </section>
      <section className="section-3">
        <h2 className="section-3-h2">Travel Miles</h2>
        <h4 className="section-3-h4">
          1/3 of all food produced for human consumption is wasted.
        </h4>
        <h4 className="section-3-h4">
          This accounts for 8% of global greenhouse gas emissions.
        </h4>
        <img src="" alt="" className=""></img>
      </section>
      <section className="section-4">
        <img src="" alt="" className=""></img>
        <h2 className="section-4-h2">Energy Consumption</h2>
        <h4 className="section-4-h4">
          1/3 of all food produced for human consumption is wasted.
        </h4>
        <h4 className="section-4-h4">
          This accounts for 8% of global greenhouse gas emissions.
        </h4>
      </section>

      <section className="subscribe-1">
        <h2 className="subscribe-1-h2">Join Our Mission</h2>
        <input type="text" className="subscribe-1-input"></input>
        <submit className="subscribe-1-submit">Subscribe</submit>
      </section>
    </>
  );
}

export default Home;