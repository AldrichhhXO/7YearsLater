import React, { Component } from 'react'
import "./NotificationContainer.css"
import Axios from 'axios'

export default class NotificationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Notifications: []
        }
    }

    componentDidMount() {

    }
    
    render() {
        return (
            <div className = "Notification-Container">
                    <h1 className = "Notification-Header">Notifications</h1>
                    <div className = "Notification">
                        <Notification />
                        <Notification />
                    </div>
                </div>
        )
    }
}


const Notification = () => {
    return (
        <div className = "Notification">
            <p className = "Notification-User"><strong>Melissa</strong> (March 24, 2021)</p>
            <p className = "Notification-Description">Added <strong><i>Aldrich Reboja</i></strong> and <strong><i>Stephanie Chavez</i></strong> to the guest list.</p>
            <hr />
        </div>
        
    )
}
