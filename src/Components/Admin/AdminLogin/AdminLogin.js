import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './AdminLogin.css'
import Instance from '../../../API/Axios'

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            message: '',
            auth: false,
            user: []
        }
    }

    componentDidMount() {
        document.title = "Reboja | Dorsey - ADMIN"

    }

    updateUserName = (e) => this.setState({userName: e.target.value})
    updatePasswod = (e) => this.setState({password: e.target.value})
    
    handleSubmit() {
        let login = {
            UserName: this.state.userName,
            password: this.state.password
        }

        Instance.post('/admin', login)
            .then(res => {
                console.log(res.data)
                this.setState({auth: true})
            })
            .catch(err => console.log(err))
        

    }

    render() {
        if (this.state.auth) return (<Redirect to = {{
            pathname: '/dashboard',
            state: {user: this.state.user}
        }}/>)

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
