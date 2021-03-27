import React from 'react'
import "./Schedule.css"

export default function Schedule() {
    return (
        <div className = "Schedule-Container">
            <h1>Schedule</h1>
            <hr />

            <div className = "Event-Container">
                <h2 className = "Event-Date">Thursday, July 29, 2021</h2>
                <div className = "Schedule-Grid">
                    <p className = "Left"><strong>4pm</strong></p>
                    <div className = "Right">
                        <p><strong><u>Ceremony</u></strong></p>
                        <p>Wayfarers Chapel</p>
                        <p>5755 Palos Verdes Dr.</p>
                        <p>Ranchos Palos Verdes, CA 90275</p>
                        <p>* Free parking on chapel grounds</p>
                    </div>
                </div>

                <div className = "Schedule-Grid">
                    <p className = "Left"><strong>6pm</strong></p>
                    <div className = "Right">
                        <p><strong><u>Reception</u></strong></p>
                        <p>Hotel Maya, Jardín de Palmeras</p>
                        <p>700 Queensway Dr.</p>
                        <p>Long Beach, CA 90802</p>
                        <p>* Complimentary parking for all wedding guests</p>
                    </div>
                </div>

                <p>Dress code: Semi-formal or Dressy Casual.</p>
                <p>The ceremony will be held indoors, cliffside, and the reception will be held outdoors, by the ocean.  Ladies should opt for something comfortable and light, paired with heels of your choice - as we will mainly be on concrete floors.  Fellas can simply wear a dress shirt and slacks, with the option of a tie.  If you wish to match the theme of our wedding, 	opt for vibrant & festive colors.</p>
            </div>
        </div>
    )
}
