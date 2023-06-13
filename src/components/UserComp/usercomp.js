import React, { useState } from 'react'
import Questionnaire from '../Questionnaire/Questionnaire'

export default function UserComp() {

    const [ response, setResponse ] = useState([])

    return (
    <>
    <Questionnaire response={response} setResponse={setResponse}/>
    </>


)}