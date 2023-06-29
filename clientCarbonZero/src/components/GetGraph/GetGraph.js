import supabase from "../../lib/supabaseclient";
import { useState, useEffect } from "react";

function GetGraph( {setGraphData}) {
  const [userSession, setUserSession ] = useState(null)

  useEffect(() => {
    fetchSessions()
  }, [])

  useEffect(() => {
    if (userSession) {
      fetchData();
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      console.log(error);
    }

    if (data) {
      setGraphData(data);
    }
  };

  return 
}

export default GetGraph;
