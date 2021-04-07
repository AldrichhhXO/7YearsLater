import React from 'react'
import './Dashboard.css'

import GuestListContainer from '../../../Containers/GuestListContainer/GuestListContainer'
import NotificationContainer from '../../../Containers/NotificationContainer/NotificationContainer'

export default function Dashboard() {
document.title = "Reboja | Dorsey - Dashboard"

    return (
        <div className = "Dashboard">
            
            <div className = "Dashboard-Options">
                <h1 className = "Dashboard-Header">Welcome, Melissa and Anthony</h1>

                <p>Currently 40 guests attending</p>
                <GuestListContainer />


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
