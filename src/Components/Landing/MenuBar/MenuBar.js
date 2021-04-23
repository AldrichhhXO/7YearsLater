import React, {useEffect} from 'react'
import './MenuBar.css'

export default function MenuBar() {


    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            let position = window.scrollY
            let storyPosition = document.getElementById('story').getBoundingClientRect().top + window.scrollY
            let bar = document.getElementsByClassName("bar")
            if ( (storyPosition - position < 0 ) && window.innerWidth < 1200) {
                for (let i =0 ; i < bar.length ; i++) {
                    bar[i].classList.add("black")
                }
                document.getElementById("menu").classList.add("font-black")
            }
            else {
                for (let i = 0; i < bar.length; i++) {
                    bar[i].classList.remove("black")
                }
                document.getElementById("menu").classList.remove("font-black")
            }
        })


    })



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
            <p id = "menu">Menu</p>
        </div>
    )
}
