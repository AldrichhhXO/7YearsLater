import React from 'react'
import './Dashboard.css'
import Instance from '../../../API/Axios'
import Guest from '../../../Components/Guest/Guest'
import Navbar from '../../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guestlist: [],
            acceptedGuests: [],
            needToRespond: []
        }
    }


    componentDidMount() {
        Instance.get('/dashboard')
            .then(res => {
                this.setState({guestlist: res.data.guestlist})
                let guests = this.state.guestlist
                let accepted = []
                let required = []
                for (let i = 0; i < guests.length; i++) {
                    if (guests[i].Rsvp === 0) required.push(guests[i])
                    else accepted.push(guests[i])
                }

                this.setState({acceptedGuests: accepted, needToRespond: required})
            })
            .catch(err => {

            })
    }

    render() {
        document.title = "Reboja | Dorsey - Dashboard"

        let guestlist = this.state.guestlist.map((guest) => { return <Guest firstName = {guest.FirstName} lastName = {guest.LastName} /> })
        let acceptedGuests = this.state.acceptedGuests.map((guest) => { return <Guest firstName = {guest.FirstName} lastName = {guest.LastName} /> })
        let pendingGuests = this.state.needToRespond.map((guest) => { return <Guest firstName = {guest.FirstName} lastName = {guest.LastName} /> })

        return (
            <div className = "Dashboard"> 
                <div className = "Dashboard-Left"></div>
                <div className = "Dashboard-Right">
                    <h1 className = "Dashboard-Header">Welcome, Melissa and Anthony</h1>
                    <Navbar />
                    <div className = "Guests-Container">
                        <h1 className = "Guests-Container-Header">Accepted</h1>
                        <p className = "Guests-Container-Counter">{this.state.acceptedGuests.length} guests</p>
                        <div className = "Accepted-Guests">
                            {acceptedGuests}
                        </div>
                    </div>

                    <div className = "Guests-Container">
                        <h1 className = "Guests-Container-Header">Need to respond</h1>
                        <p className = "Guests-Container-Counter">{this.state.needToRespond.length} guests</p>
                        <div className = "Accepted-Guests">
                            {pendingGuests}
                        </div>
                    </div>


                </div>





                {/*
                <div className = "Notification-Center">
                    <NotificationContainer />
                </div>


                                        <h1>Guests who still need to RSVP</h1>
                    <div className = "Dashboard-Stats-Container">
                        {pendingGuests}
                    </div>
                    <div>
                        <p>20 guests still need to reply</p>
                    </div>

                */}
            </div>
        )
    }

}
