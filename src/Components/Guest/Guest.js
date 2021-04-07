import React from 'react'
import './Guest.css'

export default function Guest(props) {
    return (
        <div className = "Guest">
            <h2 className = "Header-Text">{props.name}</h2>
        </div>
    )
}
