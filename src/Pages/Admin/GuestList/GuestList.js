import React, { Component } from 'react'
import './GuestList.css'
import Instance from '../../../API/Axios'

import Navbar from '../../../Components/Navbar/Navbar'

export default class GuestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestlist: [],
            originalGuestList: [],
        }
    }


    componentDidMount() {
        Instance.get('/api/u/guestlist')
            .then(res => {
                this.setState({guestlist: res.data.guestlist})
            })
            .catch()
    }
    
    render() {
        let guests = this.state.guestlist.map((guest) => {
            return (                       
            <div className = "GuestList-Guest">
                <div className = "General-Font">{guest.FirstName} {guest.LastName}</div>
                <div className = "General-Font">{guest.Email}</div>
                <div className = "General-Font"></div>
        </div>)
        })

        return (
            <div className = "GuestList">
                <Navbar />

                <div className = "GuestList-Container">
                    <p>{ guests.length > 0 ? guests.length : "IDK"} Going</p>
                    <div className = "GuestList-Grid">
                        <div className = "GuestList-Header General-Font"><strong><u>Name</u></strong></div>
                        <div className = "GuestList-Header General-Font"><strong><u>Email</u></strong></div>
                        <div className = "GuestList-Header General-Font"><strong><u>Plus One</u></strong></div>
                        {guests !== null ?guests : null}
                    </div>
                </div>
            </div>
        )
    }
}
