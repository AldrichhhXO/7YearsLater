import React, { Component } from 'react'
import RsvpPrompt from '../../Components/RSVPPrompt/RSVPPrompt'
import Instance from '../../API/Axios'
import { Redirect } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'

import './RSVP.css'

export default class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            verified: false,
            users: [],
            error: false, 
            
        }
    }
    updateFirstName = (e) => this.setState({firstName: e.target.value})
    updateLastName = (e) => this.setState({lastName: e.target.value})
    updateEmail = (e) => this.setState({email: e.target.value})

    checkForRsvp = (body) => {
        Instance.post('/api/rsvp', body)
        .then(res => {
            let usersArray = []
            for (let i = 0; i < res.data.length; i++) {
                usersArray.push(res.data[i])
            }
            this.setState({users: usersArray, verified: true})
        })
        .catch(err => {
            this.setState({error: true})
        })
    }

    handleNext = (e) => {
        e.preventDefault()
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        }
        this.checkForRsvp(body)
        this.forceUpdate()
    }


    // Conditions: IF user is verified render redirect, if error re-
    render() {
        document.title = "7YearsLater | RSVP"
        if (this.state.verified) return (
            <Redirect  push to = {{ 
                pathname: '/rsvp/qa', 
                state: {users: this.state.users }}} 
            />)
        else if (this.state.error) return (
        <div style = {{position: 'relative'}}>
            
            <div className = "Left"></div>
            <div className = "Right">
                <RsvpPrompt 
                    test = {this.state.firstName} 
                    firstName = {this.state.firstName} 
                    lastName = {this.state.lastName}
                    email = {this.state.email} 
                    handleFirstName = {this.updateFirstName}
                    handleLastName = {this.updateLastName} 
                    handleEmail = {this.updateEmail} 
                    handleSubmit = {this.handleNext} 
                    error = {this.state.error}
                />   
            </div>
    </div>)
        else
        return (
            <div style = {{position: 'relative'}}>
                <Spinner welcome = "Ready the shot glasses"/>
                <div className = "Left"></div>
                <div className = "Right">
                    <RsvpPrompt 
                        firstName = {this.state.firstName} 
                        lastName = {this.state.lastName}
                        email = {this.state.email} 
                        handleFirstName = {this.updateFirstName}
                        handleLastName = {this.updateLastName} 
                        handleEmail = {this.updateEmail} 
                        handleSubmit = {this.handleNext} 
                    />   
                </div>
            </div>
        )
    }
}

