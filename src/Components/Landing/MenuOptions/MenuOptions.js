import React from 'react'
import './MenuOptions.css'

export default function MenuOptions() {



    return (
        <div className = "Menu-Options">
            <p className = "Menu-Close"> X</p>
            <a className = "Menu-Option" href = '#story'>Story</a>
            <a className = "Menu-Option" href  = '#about'>About us</a>
            <a className = "Menu-Option" href = "#schedule">Schedule</a>
            <a className = "Menu-Option" href = '#gifts'>Gifts</a>
            <a className = "Menu-Option" href = '#covid'>Covid-19 Information</a>
            <a className = "Menu-Option" href = '#qa'>Q&A</a>  
        </div>
    )
}
