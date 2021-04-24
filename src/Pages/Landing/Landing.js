import React, { useEffect } from 'react'
import Spinner from '../Spinner/Spinner'

import CovidNotice from '../../Components/Landing/CovidNotice/CovidNotice'
import './Landing.css'

// Carousel Component
import Carousel from '../../Components/Carousel/Carousel'


/* Right side Components */
import EventSummary from '../../Components/Landing/EventSummary/EventSummary'
import Story from '../../Components/Landing/Story/Story'
import Schedule from '../../Components/Landing/Schedule/Schedule'
import Travel from '../../Components/Landing/Travel/Travel'
import CovidInformation from '../../Components/Landing/CovidInformation/CovidInformation'
import QA from '../../Components/Landing/QA/QA'
import Credits from '../../Components/Credits/Credits'


import MenuBar from '../../Components/Landing/MenuBar/MenuBar'
import MenuOptions from '../../Components/Landing/MenuOptions/MenuOptions'

export default function Landing() {

    let tester
    function calculateTime() {
        let countdown = new Date("Jul 29, 2021 16:00:00").getTime();
        let now = new Date().getTime();
        let amount = countdown - now;
        let days = Math.floor(amount/ (1000 * 60 * 60 * 24))
        let hours = Math.floor((amount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((amount % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((amount % (1000 * 60)) / 1000);
        document.getElementsByClassName("Time")[0].innerHTML  = days  + " Days " + hours + " Hrs " + minutes + " Mins " + seconds + " Secs"
    }

    useEffect(() => {
        document.title = "7YearsLater | Welcome"
        tester = setInterval(() => calculateTime())
    })  

    function closeTimer() {
        clearInterval(tester)
        window.location = "/rsvp"
    }
    let shoutoutText = "Enjoy this awesome video created for us by our talented homie, Ian, and his assistant (and wifey!), Elizabeth. Words can’t express the gratitude we have for you capturing our words, our history...7 years later in the making. Love you both!"

    return (
        <div style = {{position: 'relative'}}>
            <Spinner welcome = "Welcome"/>
            <CovidNotice />
            <div className = "Carousel">
                <MenuOptions />
                <MenuBar />
                <Carousel />
            </div>
            <div className = "Right-Section" id ="right-section">
                <EventSummary handler = {closeTimer}/>
                <Story />
                <div className ="About" id = "about">
                    <h1>About us</h1>
                    <hr />
                    <p className = "General-Font" style = {{width: '80%', margin: '0 auto', marginTop: '50px', lineHeight: '28px', textIndent: '25px'}}>{shoutoutText}</p>
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
                <p className = "Gift-Text" style = {{width: '80%', lineHeight: '30px', fontFamily: '"Open Sans", sans serif',  textIndent: "20px", marginBottom: '50px'}}>Your love, laughter, & company on our wedding day is the greatest gift of all that you could give us.  No gifts are needed or expected.</p>
                <p className = "Gift-Text" style = {{width: '80%', lineHeight: '30px', fontFamily: 'Open sans, sans serif',  textIndent: "20px", marginBottom: '100px'}}>However, a wishing well will be available for those who want to wish us some wisdom for the future</p>
                <CovidInformation />
                <QA />  

                <p className = "Section-Text" style = {{marginTop: '50px', lineHeight: '25px'}}><i>Finally - thank you for your ongoing love & support!  We are so excited to share this day with you & look forward to dancing the night away with all of our favorite people!</i></p>
                <Credits />             
            </div>
        </div>
    )


   
}


