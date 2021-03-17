import React from 'react'

import CovidMessage from '../../Components/CovidMessage/CovidMessage'

import CenteredLayout from '../../Layout/CenteredLayout/CenteredLayout'
import './Landing.css'


/* Right side Components */
import Story from '../../Components/Story/Story'
import Schedule from '../../Components/Schedule/Schedule'


let countdown = new Date("Jul 29, 2021 16:00:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    // Find distance between the two.
    let amount = countdown - now;
    // Time Calculation
    let days = Math.floor(amount/ (1000 * 60 * 60 * 24))
    let hours = Math.floor((amount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((amount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((amount % (1000 * 60)) / 1000);
    document.getElementsByClassName("Time")[0].innerHTML  = days  + " Days " + hours + " Hrs " + minutes + " Mins " + seconds + " Secs"
})

export default function Landing() {
    return (
        <div>
            <div className = "Carousel"></div>
            <div className = "Right-Section">
                <div className = "First">
                    <div>
                        <p className = "Location">Rancho Palos Verdes, CA, USA</p>
                        <p className = "Date">Thursday, 29 2021</p>
                        <p className = "Time"></p>
                    </div>

                    <button className =  "RSVP-Button">RSVP</button>
                </div>
                <Story />

                <div className ="About">
                    <h1>About us</h1>
                    <hr />
                    <div className = "Video-Placeholder"></div>
                </div>
                <Schedule />
            </div>
        </div>
    )
}


