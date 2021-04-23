import React from 'react'
import "./Schedule.css"

export default function Schedule() {


    let text = "The ceremony will be held indoors, cliffside, and the reception will be held outdoors, by the ocean. Ladies should opt for something comfortable and light, paired with heels of your choice - as we will mainly be on concrete floors." + "        " + " Fellas can simply wear a dress shirt and slacks, with the option of a tie.  If you wish to match the theme of our wedding, opt for vibrant & festive colors."

    return (
        <div className = "Schedule-Container" id = 'schedule'>
            <h1>Schedule</h1>
            <hr />

            <div className = "Event-Container">
                <h2 className = "Event-Date">Thursday, July 29, 2021</h2>
                <div className = "Schedule-Grid">
                    <p className = "Time-Section"><strong>4pm</strong></p>
                    <div className = "Right-Details">
                        <p><strong><u>Ceremony</u></strong></p>
                        <p style = {{fontSize: '22px'}}><strong><i>Wayfarers Chapel</i></strong></p>
                        <p style = {{margin: '0px'}}>5755 Palos Verdes Dr.</p>
                        <p>Ranchos Palos Verdes, CA 90275</p>
                        <p><i>Free parking on chapel grounds</i></p>
                    </div>
                </div>

                <div className = "Schedule-Grid">
                    <p className = "Time-Section"><strong>6pm</strong></p>
                    <div className = "Right-Details">
                        <p><strong><u>Reception</u></strong></p>
                        <p style = {{fontSize: '22px'}}><strong><i>Hotel Maya, Jardín de Palmeras</i></strong></p>
                       
                        <p>700 Queensway Dr.</p>
                        <p>Long Beach, CA 90802</p>
                        <p><i>Complimentary parking for all wedding guests</i></p>
                        
                    </div>
                </div>

                <p>Dress code: Semi-formal or Dressy Casual.</p>
                <p className = "Section-Text" style = {{margin: 'auto', width: '95%', marginTop: '50px', marginBottom: '50px'}}><i>{text}</i></p>
            </div>
        </div>
    )
}
