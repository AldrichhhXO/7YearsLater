import React from 'react'
import "./CovidNotice.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function CovidNotice() {

    setTimeout(() => { document.getElementsByClassName("Covid-Notice")[0].getElementsByTagName("p")[0].classList.add("Message-Hide"); }, 10000);

    function closeCovidNotice(e) {
        document.getElementsByClassName("Covid-Notice")[0].getElementsByTagName("p")[0].classList.toggle("Message-Hide")
        document.getElementsByClassName("Covid-Notice")[0].classList.toggle("Covid-Notice-Hide")

    }


    return (
        <div className = "Covid-Notice">
            <p className = "General-Font"><strong><u>{emphasis}</u></strong>{covidMessage}</p>
            <FontAwesomeIcon onClick = {closeCovidNotice} className = "Covid-Notice-Close" size = "2x" color = "gray" icon = {faTimes}/>
        </div>
    )
}
let emphasis = "Dear guests"
 let covidMessage = ` - Due to the COVID-19 situation, there are many uncertain regulations in the State of 	California & Los Angeles County that may be in effect during the time of our wedding.  Thus, we will 	personally contact you for any changes that may impact our event.  Please refer to our COVID-19 section below for current guidelines.  Thank you!`