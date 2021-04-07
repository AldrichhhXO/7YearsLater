import React from 'react'
import './MenuBar.css'

export default function MenuBar() {
    function openMenuOptions(e) {
        e.preventDefault()
        let menuOption = document.getElementsByClassName("Menu-Option")

        if (menuOption[0].classList.contains("Menu-Option-Hide"))
        {
            for (let i = 0; i < menuOption.length; i++) {
                menuOption[i].classList.toggle("Menu-Option-Hide")
            }
        }
        let menuOptions = document.getElementsByClassName("Menu-Options")[0]
        if (menuOptions.classList.contains("Menu-Hide")) menuOptions.classList.toggle("Menu-Hide") 
        menuOptions.classList.toggle("Menu-Show")
        
        setTimeout(() => {
            let menu = document.getElementsByClassName("MenuBar-Container")[0]
        menu.classList.toggle("MenuBar-Container-Hide");
        }, 1000)
        
    }

    return (
        <div className = "MenuBar-Container" onClick = {(e) => openMenuOptions(e)}>
            <div className = "Hamburger">
                <div className = "bar"></div>
                <div className = "bar"></div>
                <div className = "bar"></div>
            </div>
            <p>Menu</p>
        </div>
    )
}
