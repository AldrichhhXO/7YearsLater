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
export default class SurveyContainer extends Component {
    constructor(props){
        super(props);
        this.updateAnswer1 = this.updateAnswer1.bind(this);
        this.updateAnswer2 = this.updateAnswer2.bind(this);
        this.updateAnswer3 = this.updateAnswer3.bind(this);
        this.handleAnswers = this.handleAnswers.bind(this);

        this.state = {
            answer1: '',
            answer2: '',
            answer3: '',
            text: '',
            success: false,
            num: 0
        }
        
    }


    answers1 = ["Joyfully Accept", "Regretfully Decline"]
    answers2 = ["Chicken", "Salmon", "Vegetarian"]
    answers3 = ["Yes", "No"]

    question2 = "What entree would you prefer at our wedding?"
    question3 = "Do you plan to book a hotel room through our room block?"


    handleAnswers(e) {
        e.preventDefault()
        let body = {
            // Add USERID in soon
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer3: this.state.answer3,
            text: this.state.text,
        }
        Instance.post('/rsvp/qa', body)
            .then(res => {

                this.setState({success: true})
            })
            .catch(err => {

            })
    }

    updateAnswer1 = (input) => this.setState({answer1: input}) 
    updateAnswer2 = (input) => this.setState({answer2: input})
    updateAnswer3 = (input) => this.setState({answer3: input})

    updateText = (e) => {

        if (e.target.value.length > 200) return
        this.setState({text: e.target.value}) 
        this.setState({num: e.target.value.length})
    }

    render() {

        if (this.state.success) return <Redirect to = {{pathname: '/rsvp/success'}}/>

        return (
            <div className = "Survey-Container"> 
                <AnswerContainer container-id = {1} answers = {this.answers1} handler = {this.updateAnswer1}/>
                <AnswerContainer container-id = {2} question = {this.question2}  answers = {this.answers2} handler = {this.updateAnswer2}/>
                <AnswerContainer container-id = {3} question = {this.question3} answers = {this.answers3} handler = {this.updateAnswer3}/> 
                <p className = "Question-Font">Share how you know the couple & fun experiences you’ve all shared!</p>

                <div className = "Text-Area-Container">
                    <p>{ this.state.num } / 200</p>
                    <textarea onChange = {this.updateText} value = {this.state.text} cols = {50} rows = {5} className = "Shared-Text"/>
                </div>

                <button onClick = {this.handleAnswers} className = "Survey-Submit-Button">Submit</button>
            </div>
        )
    }
}


// <p className = "Question-Font">Will you be able to join us at our wedding? Kindly reply by the date of <b><i><u>June 21, 2021.</u></i></b></p>