import React from 'react'
import './MenuOptions.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function MenuOptions() {

    function closeMenuBar(e) {
        e.preventDefault()

        let menuOptions = document.getElementsByClassName("Menu-Option")
        for (let i = 0; i < menuOptions.length; i++) {
            menuOptions[i].classList.toggle("Menu-Option-Hide")
        }

        let menu = document.getElementsByClassName("MenuBar-Container")[0]
        menu.classList.toggle("MenuBar-Container-Hide");
        

        document.getElementsByClassName("Menu-Options")[0].classList.toggle("Menu-Hide")
        setTimeout(() => {  document.getElementsByClassName("Menu-Options")[0].classList.toggle("Menu-Show") }, 1000);

    }

    return (
        <div className = "Menu-Options">
            <FontAwesomeIcon onClick = {closeMenuBar} className = "Menu-Option Menu-Close" size = "3x" icon = {faTimes}/>
            <a className = "Menu-Option" href = '#story'>Story</a>
            <a className = "Menu-Option" href  = '#about'>About us</a>
            <a className = "Menu-Option" href = "#schedule">Schedule</a>
            <a className = "Menu-Option" href = "#travel">Travel</a>
            <a className = "Menu-Option" href = '#gifts'>Gifts</a>
            <a className = "Menu-Option" href = '#covid'>Covid-19 Information</a>
            <a className = "Menu-Option" href = '#qa'>Q&A</a>  
        </div>
    )
}
