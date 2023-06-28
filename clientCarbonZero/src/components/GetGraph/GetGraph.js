import supabase from "../../lib/supabaseclient";
import React from "react";
import { useState, useEffect } from "react";
import ProfileResults from '../ProfileResults/ProfileResults'

function GetGraph( {setGraphData}) {
  const [graphError, setGraphError] = useState(null);
  const [userSession, setUserSession ] = useState(null)

  useEffect(() => {
    fetchSessions()
  }, [])

  useEffect(() => {
    if (userSession) {
      fetchData();
    }
  }, [userSession])

  const fetchSessions = async () => {
    supabase.auth.getSession().then(session => {
      setUserSession(session)
    }).catch(error => {
      console.error(error)
    })
  }

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("users_score")
      .select("*")
      .eq("user_id", userSession.data.session.user.id);
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

  return 
}

export default GetGraph;
