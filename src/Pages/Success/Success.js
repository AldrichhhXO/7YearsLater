import React from 'react'
import './Success.css'
import Spinner from '../Spinner/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faConciergeBell, faHome } from '@fortawesome/free-solid-svg-icons'

/**
 * Note: Different message if the RSVP is declined.
 * @returns 
 */
export default function Success(props) {
    let name;

    try {
        name = props.location.state.name
    }
    catch {
        window.location = "/rsvp"
    }

    const hotelUrl = "https://doubletree.hilton.com/en/dt/groups/personalized/L/LGBMYDT-MAW-20210729/index.jhtml?WT.mc_id=POG"
    const chapel = "https://www.google.com/maps/dir//wayfarers+chapel/@35.5132405,-122.3051542,7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dd4959a07b6545:0x57293d5a1e9e8ce7!2m2!1d-118.3778475!2d33.7440107"
    const openHotelSite = () => {
        window.open(hotelUrl, '_blank').focus();
    }

    const viewDirections = () => {
        window.open(chapel, '_blank').focus();
    }


    const returnToHome = () => {
        window.location = "/"
    }

    document.title = "Reboja | Dorsey - RSVP Confirmation"
        

    return (
        <div>
            <Spinner welcome = "Time for Shots!"/>
            <div className = "Success-Left"></div>
            <div className = "Right">


                <div className = "Success-Container">
                    <h1 className = "Success-Header">Thank You {name}, You are all set!</h1>
                    <p className = "General-Font Success-Message">Here are some things that you can do to prep for the wedding</p>
                    <div className = "Activity-Container">
                        <div className = "Activity-Component" onClick = {viewDirections}>
                            <FontAwesomeIcon icon = {faMapMarkerAlt} size="3x" color="rgb(50,50,50)" className = "Activity-Icon"/>
                            <p className = "General-Font Activity">View Directions</p>
                        </div>
                        <div className = "Activity-Component" onClick = {openHotelSite}>
                            <FontAwesomeIcon icon = {faConciergeBell} size="3x" color="rgb(50,50,50)" className="Actvity-Icon"/>
                            <p className = "General-Font Activity">Book Hotel</p>
                        </div>
                        <div className = "Activity-Component" onClick = {returnToHome}>
                            <FontAwesomeIcon icon = {faHome} size="3x" color="rgb(50,50,50)" className="Actvity-Icon"/>
                            <p className = "General-Font Activity">Return to home</p>
                        </div>           
                    </div>
                </div>


            </div>
        </div>
    )
}
