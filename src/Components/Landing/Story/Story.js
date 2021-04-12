import React from 'react'

import "./Story.css"
/**
 * Story Component
 * @returns 
 */
export default function Story() {
    return (
        <div className = "Story" id = "story">
            <h1>Story</h1>
            <hr style = {{marginBottom: '70px'}}/>
            <p className = "Story-Text">{storyText}</p>
            <br />
            <p className = "Story-Text">{storyText2}</p>
            <br />
            <p className = "Story-Text">{storyText3}</p>
            <div className = "Story-Image"></div>
        </div>
    )
}


const storyText = "During a hot August evening, we were standing off to the side amongst a crowd of music festival goers.  After a long day of dancing from crowd to crowd, enjoying some of our favorite music - the fresh summer breeze was a delight on my skin."



const storyText2= "  Anthony stood behind me, arms wrapped tightly across my chest.  Despite the rowdy & energized crowd, his warmth & tight grip made me feel safe.  I was flooded with euphoria.  He kissed me gently, from forehead to temple.  “You know I love you, right?”"

const storyText3 = " I looked up at him bursting in laughter, thinking to myself, FINALLY! " +
"I’ve loved him since our college days, although I made sure not to be the first one to admit it." +
' "I love you too, baby"'

