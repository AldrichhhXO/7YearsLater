import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className = "Navbar">
            {props.title ? <div className = "Navbar-Title"><Link style = {{textDecoration: 'none', color: 'black'}} to = "/u/RebojaDorsey/Dashboard">7YearsLater</Link></div> : null}
            <div  className ="Navbar-Links">
                <Link to ="/u/RebojaDorsey/GuestList" className = "Navbar-Link">Guest List</Link>
                <Link to ="/u/RebojaDorsey/Results" className = "Navbar-Link">RSVP</Link>
            </div>

        </nav>
    )
}
