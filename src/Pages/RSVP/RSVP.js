import React, { Component } from 'react'
import CenteredLayout from  '../../Layout/CenteredLayout/CenteredLayout'
import RsvpPrompt from '../../Components/RSVPPrompt/RSVPPrompt'
import Instance from '../../API/Axios'
import { Redirect } from 'react-router-dom'

export default class RSVP extends Component {
    constructor(props) {
        super(props);
        console.log("props", props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            verified: false,
            users: [],
            error:  false, 
            errorMessage: ''
        }
    }

    updateFirstName = (e) => this.setState({firstName: e.target.value})
    updateLastName = (e) => this.setState({lastName: e.target.value})
    updateEmail = (e) => this.setState({email: e.target.value})

    checkForRsvp = (body) => {
        Instance.post('/rsvp', body)
        .then(res => {
            let usersArray = []
            for (let i = 0; i < res.data.length; i++) {
                usersArray.push(res.data[i])
            }
            this.setState({users: usersArray, verified: true})
        })
        .catch(err => {
            this.setState({error: true, errorMessage: "Invalid Credentials"})
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
        document.title = "RSVP here"
        if (this.state.verified) return (
            <Redirect  push to = {{ 
                pathname: '/rsvp/qa', 
                state: {users: this.state.users }}} 
            />)
        return (
            <CenteredLayout>
                <RsvpPrompt 
                    firstName = {this.state.firstName} 
                    lastName = {this.state.lastName}
                    email = {this.state.email} 
                    handleFirstName = {this.updateFirstName}
                    handleLastName = {this.updateLastName} 
                    handleEmail = {this.updateEmail} 
                    handleSubmit = {this.handleNext} 
                    errorMessage = {this.state.error ? this.state.errorMessage : null}/>
            </CenteredLayout>
        )
    }
}

/*
if (this.state.verified) return (
    <Redirect  push to = {{ 
        pathname: '/rsvp/qa', 
        state: {users: this.state.users }}} 
    />)
else
*/