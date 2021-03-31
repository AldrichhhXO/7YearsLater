import React from 'react'
import './Travel.css'

export default function Travel() {
    return (
        <div className = "Travel-Section" id = 'travel'>
            <h1 className = "Section-Header">Travel</h1>
            <hr className = "Section-Border"/>
            <p className = "Travel-Step"><strong><u>Getting in</u></strong></p>
            <p className = "Section-Text" style = {{margin: ' 20px auto'}}>We recommend flying into LAX!</p>
        </div>
    )
}
