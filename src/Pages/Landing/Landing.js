import React, { useEffect } from 'react'

import CovidMessage from '../../Components/Landing/CovidMessage/CovidMessage'

import CenteredLayout from '../../Layout/CenteredLayout/CenteredLayout'
import './Landing.css'

// Carousel Component
import Carousel from '../../Components/Landing/Carousel/Carousel'


/* Right side Components */
import EventSummary from '../../Components/Landing/EventSummary/EventSummary'
import Story from '../../Components/Landing/Story/Story'
import Schedule from '../../Components/Landing/Schedule/Schedule'
import Travel from '../../Components/Landing/Travel/Travel'
import CovidInformation from '../../Components/Landing/CovidInformation/CovidInformation'
import QA from '../../Components/Landing/QA/QA'


import MenuBar from '../../Components/Landing/MenuBar/MenuBar'
import MenuOptions from '../../Components/Landing/MenuOptions/MenuOptions'

export default function Landing() {
    document.title = "Reboja | Dorsey"
    return (
        <div>
            <div className = "Carousel">
                <MenuOptions />
                <MenuBar />
                <Carousel />
            </div>
            <div className = "Right-Section">
                
                <EventSummary />
                <Story />
                <div className ="About" id = "about">
                    <h1>About us</h1>
                    <hr />
                    <div className = "Video-Placeholder">
                        <iframe 
                            width = "100%"
                            height = "100%"
                            src="https://www.youtube.com/embed/kSndLA81dwg?modestbranding=1&rel=0" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"    
                            allowFullScreen = "allowFullScreen">
                        </iframe>
                    </div>
                </div>
                <Schedule />
                <Travel />
                <br id = 'gifts'/>
                <h1 className = "Section-Header">Gifts</h1>
                <hr className = "Section-Border" />
                <p style = {{width: '70%', lineHeight: '30px', fontFamily: 'Open sans, sans serif'}}>Your love, laughter, & company on our wedding day is the greatest gift of all that you could give us.  No gifts are needed or expected.</p>
                <CovidInformation />
                <QA />               
            </div>
        </div>
    )
}


