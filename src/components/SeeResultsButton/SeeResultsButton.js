import React from "react";
import questionsList from "../../lib/data";

export default function SeeResultsButton({ response, questionIndex, total, setTotal }) {
  if (questionIndex !== questionsList.length - 1) {
    return null;
  }

  // Initialise the total as an object
  // Note: This should actually be done in the component's state where `total` is declared.
  // total = {travel: 0, food: 0, energy: 0}

  const handleClick = () => {
    setTotal((prevTotal) => {
      let newTotal = { ...prevTotal };
  
      response.forEach((item) => {
        if (newTotal.hasOwnProperty(item.category)) {
          newTotal[item.category] += item.response;
        }
      });
  
      return newTotal;
    });
    console.log(total)
  };
    
    // console.log("before" + JSON.stringify(newTotal))

    // // Update the state with the new total
    // props.setTotal(newTotal);
    // console.log("total", newTotal);
    // console.log("SeeResultsButton clicked", newTotal);
}
        })
        return console.log("SeeResultsButton clicked")
// correct this file - not sure if we need console.log & correct number of curly brackets
    }
    
  return (
    <button className="see-results-button" onClick = {handleClick}>See Your Results</button>
  )
}
