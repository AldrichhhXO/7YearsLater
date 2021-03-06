import React from 'react'
import './EventSummary.css'

export default function EventSummary(props) {
    return (
        <div className = "Event-Summary-Container">
            <div className = "RSVP-Container">
                <div>
                    <h1 className = "Couple">Melissa & Anthony</h1>
                    <p className = "Location">Rancho Palos Verdes, CA, USA</p>
                    <p className = "Date">Thursday, July  29, 2021</p>
                    <p className = "Time"></p>
                </div> 
                <button disabled aria-disabled onClick = {props.handler} to = "/rsvp" className = "RSVP-Button">RSVP</button>
            </div>
        </div>
    )
}
