import React, { Component } from 'react'
import './Questionaire.css'

import UserModal from '../../Components/UserModal/UserModal'
import SurveyContainer from '../../Containers/SurveyContainer/SurveyContainer'
import { Redirect } from 'react-router';

export default class Questionaire extends Component {
    constructor(props) {
        super(props);
        console.log("QuestionaireProps: ", props.location.state)
        this.state = {
            Answers: [],
            users: props.location.state.users,
            userName: props.location.state.users[0].FirstName,
            chosen: false
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
        let userIDs = []

        {/*
            if (this.state.users.length == 0) return <Redirect to = {{pathname: '/rsvp'}}/>
        */}
        return (
            <div className = "Questionaire-Container">

                {/*
                <UserModal />
                */}
 
                <div className = "Left-Image"></div>
                <div className = "Right-Content">
                    <h1>Welcome, {this.state.userName}!</h1>
                    <h1 className = "Questionaire-Header">RSVP Questions</h1>
                   <p> {userIDs}</p>
                    <SurveyContainer /> 
                </div>
            </div>
        )

        
    }
}
