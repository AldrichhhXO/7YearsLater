import React from 'react'
import Qa_Question from './qa_question'

export default function QaContainer() {
    const questionsList = []
    for (let i = 0; i < questions.length; i++) {
        questionsList.push(<Qa_Question key ={i} question = {questions[i]} response = {answers[i]}/>);
    }

    return (
        <div className = "">   
            {questionsList}
        </div>
    )
}




let questions = [
    "When is the RSVP deadline?",
    "Are kids welcome?",
    "Why didn’t I receive a plus one?",
    "What will the weather be like?",
    "Where should I park?",
    "Will there be a shuttle to take us to the Ceremony/Reception?",
    "What should I wear?",
    "Is the wedding indoors or outdoors?",
    "Is it okay to take pictures/videos with our phones and cameras during the wedding ceremony?",
    "What steps will you be taking to ensure your wedding is COVID-safe as possible?",
    "Will there be an open-bar?  Should I make arrangements to not drive home?",
    "Whom should I call with questions?"
]

let answers = [
    "Please RSVP by June 21st, so we can have an accurate headcount. :)",
    "We hope you will understand our decision to make the wedding children-free, and take the opportunity to let your hair down and celebrate worry-free! ",
    "Due to COVID-19, we have made the decision to tighten our guest list to only 36 guests.  This would allow for a safer & comfortable gathering.  We have so many people we share amazing relationships with, this was an extremely tough choice.  We truly hope you all understand. ",
    "Welcome to the City of Angels, all of you out-of-towners!  HOT, HOT, HOT will be the weather here but it may get chilly at night since we will be oceanside, averaging 75-80℉.  Please bring some warm layers, just in case!",
    "There will be free parking at both ceremony & reception locations.",
    "There will not be a shuttle provided, so please plan accordingly.",
    "Please see our Schedule for the dress code.",
    "Our wedding ceremony is indoors, but our reception will be outdoors.",
    "To preserve the dignity & reverence of the marriage service, please refrain from taking photos/videos during the ceremony.",
    "Please see our COVID-19 information above.",
    "YES!  There is no party without dranks!  Please make arrangements to make it home safe or join our room block at Hotel Maya. ",
    "Feel free to call, email, or text either one of us!  We will be more than happy to answer any questions/concerns you may have!"
]
