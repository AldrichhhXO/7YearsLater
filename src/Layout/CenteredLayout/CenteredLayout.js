import React from 'react'
import './CenteredLayout.css'

export default function CenteredLayout(props) {
    return (
        <div className = "Centered-Layout">
            {props.children}
        </div>
    )
}
