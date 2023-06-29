import React, { useState } from 'react';
import GetGraph from '../GetGraph/GetGraph';
import ProfileResults from '../ProfileResults/ProfileResults';
import NavBar from '../Navbar/Navbar';
import './Profile.css';

function Profile() {
    const [graphData, setGraphData] = useState(null);

    const renderGraphData = () => {
        return [...graphData].reverse().map((data, index) => (

            <div key={index} className="graph-container">
                {/* <p className="date">{data.created_at.substring(0, 10).split('-').reverse().join('-')}</p> */}
                <ProfileResults date={data.created_at.substring(0, 10).split('-').reverse().join('.')} clothing={data.clothing_score} food={data.food_score} travel={data.travel_score} energy={data.energy_score}/>
            </div>
        ));
    };

    return (
        <>
            <NavBar />
            <h1 className="centered-title">{graphData ? "Your Footprint History" : ""}</h1>
            <div className="graphs">
                {graphData && renderGraphData()}
            </div>
            <GetGraph setGraphData={setGraphData} />
        </>
    );
}

export default Profile;
