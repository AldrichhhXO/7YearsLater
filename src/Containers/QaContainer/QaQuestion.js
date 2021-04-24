import React from 'react'

export default function QaQuestion(props) {


    if (props.bold) {
        return (
            <>
            <p className = "QA-Question"><strong>Q.</strong>{props.question}</p>
            <p className = "QA-Response">Please RSVP by <strong><u>June 21st</u></strong>, so we can have an accurate headcount. :)</p>
        </>
        )
    }
    else
    return (
        <>
            <p className = "QA-Question"><strong>Q.</strong>{props.question}</p>
            <p className = "QA-Response">{props.response}</p>
        </>
    )
}
