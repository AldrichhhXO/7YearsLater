import React, { Component } from 'react'
import CenteredLayout from  '../../Layout/CenteredLayout/CenteredLayout'

import RSVP_Prompt from '../../Components/RSVP_Prompt/RSVP_Prompt'
export default class RSVP extends Component {
    render() {

        document.title = "RSVP here"


        return (
            <CenteredLayout>
                <RSVP_Prompt />
            </CenteredLayout>
        )
    }
}
