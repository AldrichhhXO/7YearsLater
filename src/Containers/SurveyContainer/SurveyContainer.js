import React, { Component } from 'react'
 import Instance from '../../API/Axios'
import './SurveyContainer.css'
import Poll from '../../Components/Poll/Poll'
import AnswerContainer from '../../Containers/AnswerContainer/AnswerContainer'
import { Redirect } from 'react-router-dom'

/**
 * @name SurveyContainer
 * @description Container that will hold the whole survey.
 * @access Public
 * @author Aldrich Reboja
 */
export default function SurveyContainer(props) {

    let answers1 = ["Joyfully Accept", "Regretfully Decline"]
    let answers2 = ["Chicken", "Salmon", "Vegetarian"]
    let answers3 = ["Yes", "No"] 
    let question2 = "What entree would you prefer at our wedding?"
    let question3 = "Do you plan to book a hotel room through our room block?"


    return (
        <div className = "Survey-Container"> 
            <AnswerContainer containerId = {1} answers = {answers1} handler = {props.handleAnswer1}/>
            <AnswerContainer containerId = {2} question = {question2}  answers = {answers2} handler = {props.handleAnswer2}/>
            <AnswerContainer containerId = {3} question = {question3} answers = {answers3} handler = {props.handleAnswer3}/> 
            <p className = "Question-Font">Share how you know the couple & fun experiences you’ve all shared!</p>

            <div className = "Text-Area-Container">
                <p>{ props.stringLength } / 200</p>
                <textarea onChange = {props.handleText} value = {props.text} cols = {50} rows = {5} className = "Shared-Text"/>
            </div>

            <button onClick = {props.handleAnswers} className = "Survey-Submit-Button">Submit</button>
        </div>
    )
    
}


// <p className = "Question-Font">Will you be able to join us at our wedding? Kindly reply by the date of <b><i><u>June 21, 2021.</u></i></b></p>