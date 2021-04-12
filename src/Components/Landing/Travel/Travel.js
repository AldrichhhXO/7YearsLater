import React from 'react'
import './Travel.css'

import TravelList from '../../Landing/TravelList/TravelList'

import MapContainer from "../MapContainer/MapContainer"

export default function Travel() {


let stay1 = "The Long Beach area is where we recommend staying.  It is close to our venues & there are plenty of hotels/Airbnbs available that will fit everyone’s budget!"

let stay2 = "Since we are having our reception at Hotel Maya, there will be a room block available with a limited number of rooms at a discounted rate.  The cut-off date for you to receive this rate is June 29, 2021, so book before then!"

let hollywood = [
    "Griffith Observatory (tourist spot, but we highly recommend.  Check if they are open due to COVID)",
    "Sugarfish - Bomb Sushi! (according to Melissa lol)",
    "Mama Shelter - Rooftop Bar (check if open due to Covid)",
    "Good Times at Davey Wayne's - Indoor/Outdoor Bar (check if open due to Covid)"
]

let beaches = [
    "Manhattan Beach",
    "Redondo Beach",
    "Dockweiler Beach - Playa Del Rey",
    "Corona Del Mar - Newport Beach"
]

let foodies = [
    "KazuNori (bomba** sushi!) - Westwood",
    "Wanderlust (our favorite ice cream place) - Multiple locations",
    "Gushi (Korean food) - Westwood",
    "Tacos y Birria La Unica (This area on Olympic Blvd. has a bunch of taco trucks to choose from, you can’t go wrong!) - Boyle Heights",
    "Jon & Vinny’s (pizza & pasta) - Fairfax",
    "Rodeo 39 Public Market Place - Stanton"
]

    return (
        <div className = "Travel-Section" id = 'travel'>
            <h1 className = "Section-Header">Travel</h1>
            <hr className = "Section-Border"/>
            <p className = "Travel-Step" style = {{marginTop: '50px'}}><h3>Getting in</h3></p>
            <p className = "Section-Text">We recommend flying into LAX!</p>
            <p className = "Section-Text" style = {{marginBottom: '50px'}}>LAX to Wayfarers Chapel is about 35 mins (18mi) & about 25 mins (22mi) to Hotel Maya - all on a good day at least. </p>
            <p className = "Travel-Step"><h3>Where to stay</h3></p>
            <p className = "Section-Text">{stay1}</p>
            <p className = "Section-Text">{stay2}</p>
            <p className = "Section-Text">Please use our discount code <strong>'MAW'</strong> to book. 
                <a target = "_blank"  rel="noreferrer" href = "https://doubletree.hilton.com/en/dt/groups/personalized/L/LGBMYDT-MAW-20210729/index.jhtml?WT.mc_id=POG">Link</a>
            </p>
            <p className = "Section-Text" style = {{marginBottom: '50px'}}>LA is the ultimate tourist destination!  But skip the crowds & check out these spots locals recommend!</p>
            <TravelList title = "Downtown LA" travelItems = {hollywood} />
            <TravelList title = "Beaches" travelItems = {beaches} />
            <TravelList title = "For all my foodies :)" travelItems = {foodies} />

            <MapContainer />
        </div>
    )
}
