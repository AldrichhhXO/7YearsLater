import React, { useEffect } from 'react'

import CovidMessage from '../../Components/CovidMessage/CovidMessage'

import CenteredLayout from '../../Layout/CenteredLayout/CenteredLayout'
import './Landing.css'

// Carousel Component
import Carousel from '../../Components/Carousel/Carousel'


/* Right side Components */
import EventSummary from '../../Components/EventSummary/EventSummary'
import Story from '../../Components/Story/Story'
import Schedule from '../../Components/Schedule/Schedule'
import QA from '../../Components/QA/QA'




export default function Landing() {


    document.title = "Reboja | Dorsey"

    return (
        <div>
            
            <div className = "Carousel">
                <Carousel />
                <div className = "Time-Text">TEST TEXT</div>
            </div>
            <div className = "Right-Section">
                <EventSummary />
                <Story />

                <div className ="About">
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
                <QA />
            </div>
        </div>
    )
}


