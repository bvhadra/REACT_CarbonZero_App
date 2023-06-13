import React, { useState } from 'react'
import Button from '../Button/button'
import questionsList from '../../lib/data'
import PreviousButton from '../PreviousButton/PreviousButton'

export default function Questionnaire() {

    const [ questionIndex, setQuestionIndex ] = useState(0)

    return (
        <>
        <Button data={questionsList[questionIndex]} setQuestionIndex = {setQuestionIndex} questionIndex={questionIndex}/>

        <PreviousButton setQuestionIndex = {setQuestionIndex} questionIndex={questionIndex}/>
        </>
    )

}