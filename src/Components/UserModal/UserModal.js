import React from 'react'
import './UserModal.css'

/**
 * This should only pop up if their are more than 1 user that can potentially RSVP (plus 1s)
 * @param {} props 
 * @returns 
 */
export default function UserModal(props) {
    return (
        <div className = "User-Modal-Container">
            <div className = "Opacity-Container"></div>
            <div className = "User-Modal">
                    <h2>Hello "Insert User Here"</h2>
                    <p className = "General-Font">Who will you be reserving for today</p>
                    <div style = {{width: '100%', margin: '30px'}}>
                        <button className = "RSVP-Guest">Aldrich Reboja</button>
                        <button className = "RSVP-Guest">Stephanie Chavez</button>
                    </div>
                    
                    <input type = "Submit" />
                </div>

        </div>
    )
}
