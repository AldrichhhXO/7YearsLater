import React, { Component } from 'react'
import CenteredLayout from  '../../Layout/CenteredLayout/CenteredLayout'

import RsvpPrompt from '../../Components/RSVPPrompt/RSVPPrompt'
export default class RSVP extends Component {
    render() {

        document.title = "RSVP here"


        return (
            <CenteredLayout>
                <RsvpPrompt />
            </CenteredLayout>
        )
    }
}
