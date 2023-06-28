// Post data (responses) from the questionaire to the user_scores table
// import useState and useEffect
// import supabase, import useContext
// create a postGraph component to store the data for the state into database
// await for supabase from the user_score score and insert data. Then catch error

import supabase from "../../lib/supabaseclient";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { TotalContext } from "../../context/TotalContext";


//remove the hard code of user, so that it takes the ID of current signed in user


function PostGraph(){

    const { total, setTotal } = useContext(TotalContext);
    const [graphError, setGraphError] = useState(null);

useEffect(() => {

    const postData = async () => {

        const{data, error} = await supabase
        .from("users_score")
        .insert([{
            user_id: "fe684543-b64f-4bf8-b8e0-62c8616719b7",
            food_score: total.food,
            clothing_score: total.clothing,
            energy_score: total.energy,
            travel_score: total.travel
        }])

        if (error){
        console.log(error);
        }
        if (data){
        console.log(data);
        }
    }       

    postData()
},[])


}

export default PostGraph