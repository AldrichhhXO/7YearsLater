import React, { Component, useState } from 'react'
import './SurveyContainer.css'
import Poll from '../../Components/Poll/Poll'
import AnswerContainer from '../../Containers/AnswerContainer/AnswerContainer'


/**
 * @name SurveyContainer
 * @description Container that will hold the whole survey.
 * @access Public
 * @author Aldrich Reboja
 */
export default function SurveyContainer(props) {
    let answers1 = ["Joyfully Accept", "Regretfully Decline"]
    let answers2 = ["Chicken", "Salmon", "Vegetarian"]
    let question1 = "Will you be able to join us at our wedding? Kindly reply by the date of June 21, 2021."
    let question2 = `What entree would you prefer at our wedding, ${props.user1}?`
    let question3 = `What entree would you prefer at our wedding, ${props.user2}?`


    return (
        <div className = "Survey-Container"> 

            <div className = "Test-Image"></div>


            <AnswerContainer containerId = {0} answers = {answers1} question = {question1} handler = {props.handleAnswer1}/>
            <AnswerContainer containerId = {1} question = {question2}  answers = {answers2} handler = {props.handleAnswer2}/>
            {!props.secondUser ? null : <AnswerContainer containerId = {2} question = {question3}  answers = {answers2} handler = {props.handleAnswer3}/>}
            <p className = "Text-Area-Message">Share how you know the couple & fun experiences you’ve all shared!</p>
            <div className = "Text-Area-Container">
                <p>{ props.stringLength } / 200</p>
                <textarea onChange = {props.handleText} value = {props.text} cols = {50} rows = {5} className = "Shared-Text"/>
            </div>
            <button onClick = {props.handleAnswers} className = "Survey-Submit-Button">Submit</button>
        </div>
    )
    
}


// <p className = "Question-Font">Will you be able to join us at our wedding? Kindly reply by the date of <b><i><u>June 21, 2021.</u></i></b></p>