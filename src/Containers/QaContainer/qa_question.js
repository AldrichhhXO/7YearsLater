import React from 'react'

export default function qa_question(props) {
    return (
        <>
            <p className = "QA-Question"><strong>Q.</strong>{props.question}</p>
            <p className = "QA-Response">{props.response}</p>
        </>
    )
}
