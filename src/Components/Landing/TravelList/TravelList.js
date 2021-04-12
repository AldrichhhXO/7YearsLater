import React from 'react'
import "./TravelList.css"

export default function TravelList(props) {


    let travelItems = props.travelItems.map(((item, index) => {
       return <li key = {index}>{item}</li>
    }))

    return (
        <ul className = "Travel-List"> 
            <li className = "Header-Text Travel-Title"><h3><u>{props.title}</u></h3></li>   
            <ul className = "General-Font Travel-Item">
                {travelItems}
            </ul>
        </ul>
    )
}
