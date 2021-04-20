import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className = "Navbar">
            <Link to ="/u/RebojaDorsey/GuestList" className = "Navbar-Link">Guest List</Link>
            <Link to ="/u/RebojaDorsey/Results" className = "Navbar-Link">RSVP</Link>
        </nav>
    )
}
