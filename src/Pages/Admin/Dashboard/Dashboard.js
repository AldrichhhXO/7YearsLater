import React from 'react'
import './Dashboard.css'

import GuestList from '../../../Containers/GuestListContainer/GuestListContainer'
import NotificationContainer from '../../../Containers/NotificationContainer/NotificationContainer'

export default function Dashboard() {
document.title = "Reboja | Dorsey - Dashboard"

    return (
        <div className = "Dashboard">
            
            <div className = "Dashboard-Options">
                <h1 className = "Dashboard-Header">Welcome, Melissa</h1>
                <div className = "Dashboard-Buttons">
                    <p>Guestlist</p>
                    <p>TODO</p>
                    <p>RSVP</p>
                </div>

                <div className = "Guestlist-Container">
                    <p>Currently 40 guests attending</p>
                </div>

                <div>
                    <p>20 guests still need to reply</p>
                </div>
                
            </div>
            <div className = "Notification-Center">
                
                <NotificationContainer />
            </div>

        </div>
    )
}
