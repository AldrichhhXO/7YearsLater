import React from 'react'
import './UserModal.css'

/**
 * This should only pop up if their are more than 1 user that can potentially RSVP (plus 1s)
 * @param {} props 
 * @returns 
 */
export default function UserModal(props) {
    let guests = props.users.map((user, index) => { 
        if (index === 0) return (<button key = {user.UserID} id = {user.UserID} className = "RSVP-Guest Selected">{user.FirstName} {user.LastName}</button>)
        else return (<button key = {user.UserID} id = {user.UserID} onClick = {props.buttonHandler} className = "RSVP-Guest">{user.FirstName} {user.LastName}</button>)
    })
    return (
        <div className = "User-Modal-Container">
            <div className = "Opacity-Container"></div>
            <div className = "User-Modal">
                    <h2 className = "Modal-Header">Hello {props.mainUser}</h2>
                    <p className = "General-Font">Who will you be reserving for today</p>
                    <div style = {{width: '100%', margin: '30px'}}>
                        {guests}
                    </div>
                    <input type = "Submit" onClick = {props.modalHandler}/>
                </div>
        </div>
    )
}
