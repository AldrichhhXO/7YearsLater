import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import {faHome, faBook} from '@fortawesome/free-solid-svg-icons'

export default function Error() {
    return (
        <div>
            <div className = "Left"></div>
            <div className = "Right">

                <div className = "Error-Container">
                    <h1 className = "Error-Title">Well this is embarrassing..</h1>
                    <p className = "Error-msg">It seems you have stumbled onto a page that doesn't exist, let's get you back.</p>

                    <div className = "Action-Buttons">
                        <div className = "Action-Button">
                        <Link to ="/" className = "Action-Button">
                                <FontAwesomeIcon icon = {faHome} size = "3x"/>
                                <p>Return to home</p>
                            </Link>
                        </div>
                        <div className = "Action-Button">
                            <Link to ="/rsvp" className = "Action-Button">
                                <FontAwesomeIcon icon = {faBook} size = "3x"/>
                                <p>Start Your RSVP</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
