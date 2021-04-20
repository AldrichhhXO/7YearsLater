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
        Instance.get('/guestlist')
            .then(res => {
                this.setState({guestlist: res.data.guestlist})
            })
            .catch()
    }

    filterSearch() {

    }

    toggleFilter(e) {
        e.preventDefault()
        e.target.classList.toggle("Selected-Filter")
    }
    
    render() {

        let guests = this.state.guestlist.map((guest) => {
            let plusID = guest.PlusOne


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
                    <p>{guests.length} Going</p>
                    <div className = "GuestList-Grid">
                        <div className = "GuestList-Header General-Font"><strong><u>Name</u></strong></div>
                        <div className = "GuestList-Header General-Font"><strong><u>Email</u></strong></div>
                        <div className = "GuestList-Header General-Font"><strong><u>Plus One</u></strong></div>
                        {guests}

                        {/*

                        <div className = "GuestList-Guest">
                            <div className = "General-Font">Aldrich Reboja</div>
                            <div className = "General-Font">Aktreboja@gmail.com</div>
                            <div className = "General-Font">Stephanie Chavez</div>
                        </div>

                        <div className = "GuestList-Guest">
                            <div className = "General-Font">Aldrich Reboja</div>
                            <div className = "General-Font">Aktreboja@gmail.com</div>
                            <div className = "General-Font">Stephanie Chavez</div>
                        </div>
                        */}

                    </div>
                </div>
            </div>
        )
    }
}
