import React from 'react'
import QaContainer from '../../../Containers/QaContainer/QaContainer'
import './QA.css'

export default function QA() {
    return (
        <div className = "QA" id = 'qa'>
            <h1 className = "Section-Header">Q&A</h1>
            <hr className  = "Section-Border"/>
            <p className = "QA-Message">For all our friends and family who have lots of questions, please check out our Q&A first!</p>
            <QaContainer />
        </div>
    )
}



  