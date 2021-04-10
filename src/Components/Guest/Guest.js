import React from 'react'
import './Guest.css'

export default function Guest(props) {
    return (
        <div className = "Guest">
            <h2 className = "Header-Text Guest-Name">{props.firstName} {props.lastName}</h2>
        </div>
    )
}
