import React from 'react'
import questionsList from '../../lib/data'

export default function SeeResultsButton({questionIndex, total, setTotal}) {
    if (questionIndex !== questionsList.length - 1) {
        return null
    }

    // Initialise the total as an object
    // Note: This should actually be done in the component's state where `total` is declared.
    // total = {travel: 0, food: 0, energy: 0}

    const handleClick = () => {
        // Create a copy of the total object
        let newTotal = {...total};

        questionsList.forEach((item, index) => {
            // If the category exists in the total object, increment the score.
            if (newTotal.hasOwnProperty(item.category)) {
                newTotal[item.category] += item.response;
            }
        });

        // Update the state with the new total
        setTotal(newTotal);
        console.log("total", total);
        console.log("SeeResultsButton clicked", newTotal);
    }
    
    return (
        <button onClick = {handleClick}>See Your Results</button>
    )
}