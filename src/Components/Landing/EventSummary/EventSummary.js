import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './EventSummary.css'

export default function EventSummary() {
    useEffect(() => {
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

        return () => clearInterval(x)  
    }, [])

    return (
        <div className = "Event-Summary-Container">
            <div className = "RSVP-Container">
                <div>
                    <p className = "Location">Rancho Palos Verdes, CA, USA</p>
                    <p className = "Date">Thursday, 29 2021</p>
                    <p className = "Time"></p>
                </div>

                
                <Link to = "/rsvp" className = "RSVP-Button">RSVP</Link>
            </div>
        </div>
    )
}

/*
<div>

</div>
*/