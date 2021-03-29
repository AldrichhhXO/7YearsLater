import React, { Component } from 'react'
import instance from '../../API/Axios'

import WeddingPoll from '../../Components/WeddingPoll/WeddingPoll'

export default class QuestionaireContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    componentDidMount() {
        /*
        instance.get('/rsvp/qa')
            .then(res => {

            })
            */
    }

    render() {
        return (
            <div> 
                
            </div>
        )
    }
}
