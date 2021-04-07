import React, { Component } from 'react'
import './Questionaire.css'

export default class Questionaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Answers: [],
            user: {},
            totalGuests: 0,
            selectedGuests: 0
        }
    }

    componentDidMount() {
        document.title = "Reboja | Dorsey - RSVP Questions"
        this.setState({totalGuests:document.getElementsByClassName('RSVP-Guest').length})
    }

    toggleGuest = (e) => {
        e.preventDefault()
        let target = e.target
         let test = String( e.target.className)
        if (test.includes('Selected-Guest')) {
            target.classList.remove('Selected-Guest')
            this.setState(prevState => {
                return {selectedGuests: prevState.selectedGuests - 1}
            })
            console.log(target)
        }
        else  {
            target.classList.add('Selected-Guest')
            this.setState(prevState => {
                return {selectedGuests: prevState.selectedGuests + 1}
            })
            console.log(target)
        }
        
    }

     
    render() {  
        return (
            <div className = "Questionaire-Container">
                <div className = "Left-Image"></div>
                <div className = "Right-Content">
                    <h1 className = "Header-Text ">Welcome "Insert User name here"</h1>
                    <p className = "General-Font">Select you will be RSVPing for</p>
                    <div className = "RSVP-Guests-Container">
                        <div className = "RSVP-Guest" onClick = {(e) => this.toggleGuest(e)}>Aldrich Reboja</div>
                        <div className = "RSVP-Guest" onClick = {(e) => this.toggleGuest(e)}>Stephanie Chavez</div>
                        <p className = "General-Font">{this.state.selectedGuests} of {this.state.totalGuests} Selected</p>
                    </div>
                    <div className = "Questionaire">
                        <h1 className = "Questionaire-Header">RSVP Questions</h1>

                        <p>Question 1 of ?</p>

                        <p className = "Question-Font">Will you be able to join us at our wedding? Kindly reply by the date of <b><i><u>June 21, 2021.</u></i></b></p>

                        <div className = "Answers-Wrapper">
                            <div className = "Answer-Choice">Joyfully Accept</div>
                            <div className = "Answer-Choice">Regretfully Resign</div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )

        
    }
}
