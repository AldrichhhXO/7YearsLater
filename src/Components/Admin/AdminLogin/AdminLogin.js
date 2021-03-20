import React, { Component } from 'react'
import './AdminLogin.css'

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Reboja | Dorsey - ADMIN"
    }

    render() {
        return (
            <form className = "Admin-Login-Form">
                <h1 className = "Admin-Login-Form-Title">Welcome Melissa & Anthony</h1>
                <hr />
                <div className = "Form-Element">
                    <label>User Name</label><br />
                    <input type = "text" required = {true} placeholder = "User name here ... "/>
                </div>
                <div className = "Form-Element">
                    <label>Password</label><br />
                    <input type = "password" required = {true} placeholder = "Password"/>
                </div>
                <input type = "submit" value = "Login" />
            </form>
        )
    }
}
