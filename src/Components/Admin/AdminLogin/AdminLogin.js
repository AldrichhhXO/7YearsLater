import React, { Component } from 'react'
import './AdminLogin.css'
import instance from '../../../API/Axios'

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    componentDidMount() {
        document.title = "Reboja | Dorsey - ADMIN"
    }

    updateUserName = (e) => this.setState({userName: e.target.value})
    updatePasswod = (e) => this.setState({password: e.target.value})
    
    handleSubmit() {
        window.location = "/dashboard"
    }

    render() {
        return (
            <form className = "Admin-Login-Form" onSubmit = {this.handleSubmit}>
                <h1>{this.state.message}</h1>
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
