import React from 'react'
import './RSVPPrompt.css'

export default function RSVP_Prompt(props) {
        return (
            <div className = "RSVP-Prompt">
                <h1 className = "RSVP-Title">Melissa & Anthony</h1>
                <p className = "RSVP-Text">Rancho Palos Verdes, CA, USA</p>
                <p className = "RSVP-Text">Thursday, July 29, 2021</p>
                <p className = "RSVP-Text">Enter your information to RSVP.</p>
                {props.error ? <p className = "Error-Message">Invalid Credentials</p> : null}
                <form onSubmit = {props.handleSubmit} className  ="RSVP-Form">
                    <div className = "Name-Inputs">
                        <input type = "text" placeholder = "First Name"  value = {props.firstName} required = {true} onChange = {props.handleFirstName} />
                        <input type = "text" placeholder = "Last Name" value = {props.lastName} required = {true} onChange = {props.handleLastName}/>
                    </div>
                    <input type = "email" placeholder = "Email" value = {props.email} required = {true} onChange = {props.handleEmail}/>
                    <button type = "submit" className = "Next-Button">Next</button>
                </form>
            </div>
        )
    
}
