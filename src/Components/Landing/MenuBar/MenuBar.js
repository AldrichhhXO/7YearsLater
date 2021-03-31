import React from 'react'
import './MenuBar.css'

export default function MenuBar() {
    function openMenuOptions(e) {
        e.preventDefault()
        console.log('e')
        document.getElementsByClassName("Menu-Options")[0].style.display="flex"
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
