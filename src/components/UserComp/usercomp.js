import React, { useState } from 'react'
import Questionnaire from '../Questionnaire/Questionnaire'
import questionsList from '../../lib/data'

export default function UserComp() {

    const [response, setResponse] = useState(
        questionsList.map((item, index) => ({ id: index, responseValue: null }))
      );
      
    return (
    <>
    <Questionnaire response={response} setResponse={setResponse}/>
    </>


)}