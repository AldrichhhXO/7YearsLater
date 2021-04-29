import React from 'react'
import './CovidInformation.css'

export default function CovidInformation() {
    return (
        <>
            <br id = 'covid'/>
            <h1 className = "Section-Header">Covid-19 Information</h1>
            <hr className = "Section-Border"/>

            {/*

            <p className = "Section-Text">In accordance to the current public health guidelines, Wayfarers Chapel is currently limited to 25 people for indoor ceremonies.  No worries!  We are hopeful this number will increase as our wedding day gets closer.  If not, we will personally inform you if you will be able to join our ceremony or simply our reception.  Thank you for understanding!</p>
            <p className = "Section-Text">Our reception will take place outdoors, with the current hotel limit of 75 guests.  In order to keep our wedding as safe as possible, we have decided to only host <strong><u>36 guests,</u></strong> including ourselves.  Therefore, everyone invited will be able to join in on the fun!  </p>
            */}

            <p className = "Section-Text">Thankfully, as COVID rates have been decreasing in LA County, Wayfarers Chapel & Hotel Maya have been increasing their gathering capacity for wedding events.  If ever their capacity drops below our guest count, we will personally inform you on our plans ahead.  Thank you for understanding!</p>

            <p className = "Section-Text">Guest seating & tables will be arranged per household or friends group, as best as possible.  We will limit to about 4-6 people per table, with a spacious floor plan. </p>
            <p className = "Section-Text">For your safety, we <strong><u>encourage</u></strong> you all to be vaccinated prior to our wedding.  Remember, vaccines are our only hope for normalcy! </p>
            <p className = "Section-Text">For safety measures, we do <strong><u>recommend</u></strong> guests to be tested for COVID-19, 2 days prior to our wedding.  </p>
            <p className = "Section-Text">Masks will be required during our entire wedding celebration. </p>
            <p className = "Section-Text">COVID screenings & temperature checks will take place at the chapel & reception locations.</p>
            <p className = "Section-Text" style = {{marginBottom: '50px'}}>If you have or are experiencing one or more of the following symptoms, not due to a chronic condition, in the last 2 weeks - please <strong><u>DO NOT</u></strong> attend our wedding.</p>

                <ul style = {{width: '60%',lineHeight: '22px', marginTop: '-10px', marginBottom: '40px'}}>
                    <li>Fever greater than or equal to 37.8℃/100℉</li>
                    <li>Chills</li>
                    <li>Cough</li>
                    <li>Difficulty breathing or shortness of breath</li>
                    <li>Sore throat</li>
                    <li>Muscle aches</li>
                    <li>Diarrhea</li>
                    <li>Severe fatigue</li>
                    <li>Headache</li>
                    <li>Loss of sense of taste and/or smell</li>
                    <li>Nasal congestion</li>
                    <li>Runny nose</li>
                    <li>Nausea</li>
                    <li>Vomiting</li>
                </ul>
            
            <p className = "Section-Text" style = {{marginBottom: '100px'}}><i>We greatly appreciate your patience & understanding throughout this entire process!  This is a special time for all of us to celebrate love & enjoy the presence of those we care for the most.  Thus, we do ask for everyone’s consideration & team work during such a challenging time!  Thank you!   </i></p>

            {/*

            <p className = "Section-Text">We greatly appreciate your patience & understanding throughout this entire process!  Please feel free to contact us if you have any questions and/or concerns!</p>
            <p className = "Section-Text" style = {{marginBottom: '100px'}}>Lastly, this is a special time for all of us to celebrate love & enjoy the presence of those we care for the most.  No one will go around being COVID police, but we do ask for everyone’s consideration & team work during such a challenging time!  Thank you!   </p>
            */}
        </>
    )
}
