import React from 'react'
import CenteredLayout from '../../Layout/CenteredLayout/CenteredLayout'
import './Success.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faConciergeBell } from '@fortawesome/free-solid-svg-icons'

/**
 * Note: Different message if the RSVP is declined.
 * @returns 
 */
export default function Success() {
    const hotelUrl = "https://doubletree.hilton.com/en/dt/groups/personalized/L/LGBMYDT-MAW-20210729/index.jhtml?WT.mc_id=POG"
    const openHotelSite = () => {
        window.open(hotelUrl, '_blank').focus();
    }

    document.title = "Reboja | Dorsey - RSVP Confirmation"
        

    return (
        <CenteredLayout>
            <h1 className = "Header-Text">Thank You "Insert name here", You are all set!</h1>
            <p className = "General-Font">Here are some things that you can do to prep for the wedding</p>
            <div className = "Activity-Container">
                <div className = "Activity-Component">
                    <FontAwesomeIcon icon = {faMapMarkerAlt} size="3x" color="teal" className = "Activity-Icon"/>
                    <p className = "General-Font Activity">View Directions</p>
                </div>

                <div className = "Activity-Component" onClick = {openHotelSite}>
                    <FontAwesomeIcon icon = {faConciergeBell} size="3x" color="teal" className="Actvity-Icon"/>
                    <p className = "General-Font Activity">Book Hotel</p>
                </div>

                                
            </div>
        </CenteredLayout>
    )
}
