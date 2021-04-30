import React, { Component } from 'react'
import Instance from '../../../API/Axios'
import './Results.css'

import Navbar from '../../../Components/Navbar/Navbar'

export default class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            polls: []
        }

        document.title = "7YearsLater | RSVP Results"
        Instance.get('/api/u/results')
            .then( (res) => {
                console.log(res.data)
                this.setState({polls: res.data.polls})
            })
            .catch(err => {
                
            })
    }

    componentDidMount() {

    }

    render() {
        let polls = this.state.polls.map((poll) => {
            return (
            <div className = "Result">
                <p>{poll.FirstName} {poll.LastName}</p>
                <p>{poll.Question1}</p>
                <p>{poll.Question2}</p>
                <p>{poll.Question4}</p>
            </div>
            )
        })

        return (
            <div className = "Results-Page">
                <Navbar title = {true}/>

{/*
                <div className = "Filters-Container">
                        <input className = "Name-Search" placeholder = "Search for a specific user here" type = "Search"  onChange = {this.filterSearch}/>
                        <div className = "Filters">
                            <div onClick = {this.toggleFilter} className = "Filter General-Font">Joyfully Accepted</div>
                            <div onClick = {this.toggleFilter} className = "Filter General-Font">Regretfully Declined</div>
                            <div onClick = {this.toggleFilter} className = "Filter General-Font">Salmon</div>
                            <div onClick = {this.toggleFilter} className = "Filter General-Font">Chicken</div>
                            <div onClick = {this.toggleFilter} className = "Filter General-Font">Vegetarian</div>
                        </div>
                    </div>
*/}
                <div className = "Results-Container">
                    <h1><u>Name</u></h1>
                    <h1><u>Decision</u></h1>
                    <h1><u>Meal Preference</u></h1>
                    <h1><u>Text</u></h1>
                    {polls}
                </div>
            </div>
        )
    }
}
