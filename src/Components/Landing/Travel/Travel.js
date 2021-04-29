import React from 'react'
import './Travel.css'

export default function Travel() {
    let stay1 = "The Long Beach area is where we recommend staying.  It is close to our venues & there are plenty of hotels/Airbnbs available that will fit everyone’s budget!"
    return (
        <div className = "Travel-Section" id = 'travel'>
            <h1 className = "Section-Header">Travel</h1>
            <hr className = "Section-Border"/>
            <p className = "Travel-Step" style = {{marginTop: '50px'}}><h3>Getting in</h3></p>
            <p className = "Section-Text">We recommend flying into LAX!</p>
            <p className = "Section-Text" ><i>LAX to Wayfarers Chapel is about 35 mins (18mi) & about 25 mins (22mi) to Hotel Maya - all on a good day at least.</i> </p>
            <p className = "Section-Text" style = {{marginBottom: '50px'}}><i>However, please make sure to compare flight prices at SNA!</i> </p>
            <p className = "Travel-Step"><h3>Where to stay</h3></p>
            <p className = "Section-Text">{stay1}</p>
            <p className = "Section-Text">Since we are having our reception at Hotel Maya, there will be a room block available with a limited number of rooms at a discounted rate.  The cut-off date for you to receive this rate is <strong><u>June 29, 2021</u></strong>, so book before then!</p>
            <p className = "Section-Text">Please use our discount code <strong>'MAW'</strong> to book. </p>
            <div style = {{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '70px', marginBottom: '-50px'}}><a href = "https://doubletree.hilton.com/en/dt/groups/personalized/L/LGBMYDT-MAW-20210729/index.jhtml?WT.mc_id=POG" target = '_blank' rel="noopener noreferrer" className = "Book-Button">Book Hotel Now</a></div>
        </div>
    )
}
