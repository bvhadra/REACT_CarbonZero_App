import React from "react";
import questionsList from "../../lib/data";

export default function SeeResultsButton(props) {
  if (props.questionIndex !== questionsList.length - 1) {
    return null;
  }

  // Initialise the total as an object
  // Note: This should actually be done in the component's state where `total` is declared.
  // total = {travel: 0, food: 0, energy: 0}

  const handleClick = () => {
    // Create a copy of the total object

    let newTotal = { ...props.total }
    
    console.log("before" + newTotal)

    questionsList.forEach((item, index) => {

      // If the category exists in the total object, increment the score.

      // if the category is = travel, add the response to the score
      

      if(item.category === "travel") {
          newTotal.travel += item.response
      }


      // if (newTotal.hasOwnProperty(item.category)) {
      //   newTotal[item.category] += item.response;
      // }
    });

    // Update the state with the new total
    props.setTotal(newTotal);
    console.log("total", newTotal);
    console.log("SeeResultsButton clicked", newTotal);
  };

  return <button onClick={handleClick}>See Your Results</button>;
}
