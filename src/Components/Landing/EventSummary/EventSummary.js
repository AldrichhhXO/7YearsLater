import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './EventSummary.css'

export default function EventSummary(props) {
    return (
        <div className = "Event-Summary-Container">
            <div className = "RSVP-Container">
                <div>
                    <p className = "Location">Rancho Palos Verdes, CA, USA</p>
                    <p className = "Date">Thursday, 29, 2021</p>
                    <p className = "Time"></p>
                </div>

                
                <button onClick = {props.handler} to = "/rsvp" className = "RSVP-Button">RSVP</button>
            </div>
        </div>
    )
}

/*
<div>

</div>
*/