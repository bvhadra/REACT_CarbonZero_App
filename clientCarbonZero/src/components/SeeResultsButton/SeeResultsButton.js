import React from "react";
import questionsList from "../../lib/data";
import { useContext, useEffect, useState } from "react";
import { TotalContext } from "../../context/TotalContext";
import { Link } from "react-router-dom";
import "./SeeResultsButton.css";
import supabase from '../../lib/supabaseclient'


export default function SeeResultsButton({
  response,
  questionIndex,
  buttonClicked,
}) {

  const { total, setTotal } = useContext(TotalContext);
  const [ session, setUserSession ] = useState(null)

  useEffect(() => {
    console.log("gettingsession")
    fetchSession()

  },[] )
  

  const fetchSession = async () => {

    supabase.auth.getSession().then(session => {
      setUserSession(session)
      console.log(session)
    }).catch(error => {
      console.error(error)
    })

  }

  const postData = async (userId, total) => {

    const { data, error } = await supabase
      .from("users_score")
      .insert([
        {
          user_id: userId,
          food_score: total.food,
          clothing_score: total.clothing,
          energy_score: total.energy,
          travel_score: total.travel,
        },
      ]);
    

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    } 
  };

  if (questionIndex !== questionsList.length - 1) {
    return null;
  }

  const handleClick = async () => {
    let newTotal = { ...total };
    response.forEach((item) => {
      if (newTotal.hasOwnProperty(item.category)) {
        newTotal[item.category] += item.response;
      }
    });
  
    setTotal(newTotal);
  
    if (!session.data.session || newTotal.travel <= 0) {
      return;
    }
      await postData(session.data.session.user.id, newTotal);
    
  };
  
  

  if (questionIndex === questionsList.length - 1 && buttonClicked === true) {
    return (
      <>
        {/* <Link to="/ResultPage"> */}
        <Link to="/ResultPage">
          <button className="see-results-button" onClick={handleClick}>
            See Your Results
          </button>
        </Link>
      </>
    );
  }
}
