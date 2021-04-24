import React from 'react'
import './Credits.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Credits() {
    return (
        <div className = "Credits">
            <h1 className = "Credits-User">Aldrich Reboja</h1>
            <hr style = {{marginBottom: '50px', width: '50%', maxWidth: '300px'}}/>
            <div className = "Credits-Contacts">
                <a className = "Contact" href = "https://www.linkedin.com/in/aktreboja/" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faLinkedin} size = "2x"/></a>
                <a className = "Contact" href = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTMXgGpdwsCqrBvcwQrvNFkgWzKlDKBltfxGXzPjsFsStzgswfjCkCqRwsJcsVctWnWJfg" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faEnvelope}  size = "2x"/></a>
                <a className = "Contact" href = "https://www.instagram.com/AldrichhhXO_" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faInstagramSquare} size = "2x"/></a>
            </div>
        </div>
    )
}
