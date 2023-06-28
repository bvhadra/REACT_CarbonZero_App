import React, { useState } from 'react';
import GetGraph from '../GetGraph/GetGraph';
import ProfileResults from '../ProfileResults/ProfileResults';
import NavBar from '../Navbar/Navbar';

function Profile() {
    const [graphData, setGraphData] = useState(null);

    const renderGraphData = () => {
        return [...graphData].reverse().map((data, index) => (
            <ProfileResults key={index} clothing={data.clothing_score} />
        ));
    };

    return (
        <>
            <NavBar />
            <p>{graphData ? "Graph data" : "Loading graph data..."}</p>
            {graphData && renderGraphData()}
            <GetGraph setGraphData={setGraphData} />
        </>
    );
}

export default Profile;
