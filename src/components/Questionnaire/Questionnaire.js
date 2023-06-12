import React, { useState } from 'react'
import Button from '../Button/button'
import questionsList from '../../lib/data'

export default function Questionnaire() {

    const [ questions, setQuestions ] = useState(0)

    return (
        <Button data={questionsList[questions]} />
    )

}