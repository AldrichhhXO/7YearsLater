import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './RSVPPrompt.css'

export default class RSVP_Prompt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            verified: false
        }
    }

    // validates if a user exists in the database
    checkForRSVP = (e) => {
        e.preventDefault()
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
    }

    updateFirstName = (e) => this.setState({firstName: e.target.value})
    updateLastName = (e) => this.setState({lastName: e.target.value})
    updateEmail = (e) => this.setState({email: e.target.value})

    handleNext = (e) => {
        this.setState({verified: true})
    }

    render() {

        if (this.state.verified) return <Redirect to = {{pathname: '/rsvp/qa'}}/>
        else
        return (
            <div className = "RSVP-Prompt">
                <h1 className = "RSVP-Title">Melissa & Anthony</h1>
                <p className = "RSVP-Text">Rancho Palos Verdes, CA, USA</p>
                <p className = "RSVP-Text">Thursday, July 29, 2021</p>
                <p className = "RSVP-Text">Enter your information to RSVP.</p>

                <div>
                    <input type = "text" placeholder = "First Name" value = {this.state.firstName} onChange = {this.updateFirstName}/>
                    <input type = "text" placeholder =  "Last Name" value = {this.state.lastName} onChange = {this.updateLastName}/>
                </div>
                <input type = "email" placeholder = "Email" value = {this.state.email} onChange = {this.updateEmail}/>
                <button onClick = {(e) => this.handleNext(e)} className = "Next-Button">Next</button>
            </div>
        )
    }
}
