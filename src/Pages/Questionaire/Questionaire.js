import React, { Component } from 'react'
import CenteredLayout from '../../Layout/CenteredLayout/CenteredLayout'
import './Questionaire.css'

export default class Questionaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Answers: []
        }
    }

    componentDidMount() {
        document.title = "Reboja | Dorsey - RSVP Questions"

    }

    render() {
        return (
            <div className = "Questionaire-Container">
                <div className = "Left-Image"></div>
                <div className = "Right-Content">
                    
                    <div className = "Questionaire">
                        <h1 className = "Questionaire-Header">RSVP Questions</h1>

                        <p>Question 1 of ?</p>

                        <p className = "Question-Text">Will you be able to join us at our wedding? Kindly reply by the date of <b><i><u>June 21, 2021.</u></i></b></p>

                        <div className = "Answers-Wrapper">
                            <div className = "Answer-Choice">Answer Here</div>
                            <div className = "Answer-Choice">Answer Here</div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}
