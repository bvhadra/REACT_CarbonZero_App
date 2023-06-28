/*

import react, useState, useEffect
Create a state for the graphdata and the error 
Create a GetGraph Component
Fetch the data from the users_score table
    This data will be based on their UUID
        We will get the UUID from the session
Set up error handling 
*/
import supabase from "../../lib/supabaseclient";
import React from "react";
import { useState, useEffect } from "react";


function GetGraph() {
  const [graphData, setGraphData] = useState(null);
  const [graphError, setGraphError] = useState(null);
  // const [userSession, setUserSession ] = useState(null)

  useEffect(() => {
    // const fetchSessions = async () => {

    // const session = await supabase.auth.session()

    // setUserSession(session)

    // }

    const fetchData = async () => {
      // let { data, error } = await supabase
      //     .from('users_score ')
      //     .select('*')

      // getting the users data or an error if data isn't found
      const { data, error } = await supabase
        .from("users_score")
        .select("*")
        .eq("user_id", "fe684543-b64f-4bf8-b8e0-62c8616719b7");
      console.log(error);
      console.log(data);

      if (error) {
        setGraphError("Record Not Found");
        setGraphData(null);
      }

      if (data) {
        setGraphError(null);
        setGraphData(data);
      }
    };

    fetchData();
    // fetchSessions()
  }, []);

  return (
    <div>
      <p>{graphData?.food_score}</p>
    </div>
  );
}

export default GetGraph;
