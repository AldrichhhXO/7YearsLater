import React from 'react'
import './Credits.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faLink} from '@fortawesome/free-solid-svg-icons'

export default function Credits(props) {
    return (
        <div className = "Credits">
            <h1 className = "Credits-User">{props.creditsText}</h1>
            <hr style = {{marginBottom: '50px', width: '50%', maxWidth: '300px'}}/>
            <div className = "Credits-Contacts">
                {props.linkedIn ? <a className = "Contact" href = {props.linkedIn} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faLinkedin} size = "2x"/></a> : null }
                <a className = "Contact" href = {props.emailLink} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faEnvelope}  size = "2x"/></a>
                {props.instagramLink ? <a className = "Contact" href = {props.instagramLink} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faInstagramSquare} size = "2x"/></a> : null}
                {props.website ? <a className = "Contact" href = {props.website} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faLink} size = "2x"/></a> : null}
            </div>
        </div>
    )
}
