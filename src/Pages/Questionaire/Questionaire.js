import React, { Component } from 'react'
import './Questionaire.css'
import UserModal from '../../Components/UserModal/UserModal'
import SurveyContainer from '../../Containers/SurveyContainer/SurveyContainer'
import Instance from '../../API/Axios'
import { Redirect } from 'react-router-dom'

export default class Questionaire extends Component {
    constructor(props) {
        super(props);

        let userIDs = []
        for (let i =0; i < props.location.state.users.length; i++) {
            userIDs.push(props.location.state.users[i].UserID)
            
        }

        this.state = {
            users: props.location.state.users,
            userName: props.location.state.users[0].FirstName,
            userID: [14,24], 
            chosen: false,
            answer1: '',
            answer2: '',
            answer3: '',
            text: '',
            success: false,
            num: 0
        }
        console.log(this.state.userID)
        
    }

    componentDidMount() {
        document.title = "Reboja | Dorsey - RSVP Questions"
        this.setState({totalGuests:document.getElementsByClassName('RSVP-Guest').length})
    }


    
    handlePollAnswers = (e) => {
        e.preventDefault()

        e.preventDefault()
        let body = {
            userID: this.state.userID, 
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer3: this.state.answer3,
            text: this.state.text,
        }
        Instance.post('/rsvp/qa', body)
            .then(res => {

                alert('yeet')
                //this.setState({success: true})
            })
            .catch(err => {

            })

    }
    

    updateAnswer1 = (input) => this.setState({answer1: input}) 
    updateAnswer2 = (input) => this.setState({answer2: input})
    updateAnswer3 = (input) => this.setState({answer3: input})
    updateText = (e) => {
        if (e.target.value.length > 200) return
        this.setState({text: e.target.value}) 
        this.setState({num: e.target.value.length})
    }

    render() { 
        if (this.state.success) return <Redirect to = {{pathname: '/rsvp/success'}}/>
        return (
            <div className = "Questionaire-Container">
                
                <UserModal />
                
                <div className = "Left-Image"></div>
                <div className = "Right-Content">
                    <h1>Welcome, {this.state.userName}!</h1>
                    <h1 className = "Questionaire-Header">RSVP Questions</h1>
                    <SurveyContainer 
                        answer1 = {this.state.answer1}
                        answer2 = {this.state.answer2}
                        answer3 = {this.state.answer3}
                        text = {this.state.text} 
                        stringLength = {this.state.num} 
                        handleAnswer1  = {this.updateAnswer1}
                        handleAnswer2 = {this.updateAnswer2}
                        handleAnswer3 = {this.updateAnswer3}
                        handleText = {this.updateText}
                        handleAnswers = {this.handlePollAnswers}/> 
                </div>
            </div>
        )

        
    }
}


    /*
    toggleGuest = (e) => {
        e.preventDefault()
        let target = e.target
         let test = String( e.target.className)
        if (test.includes('Selected-Guest')) {
            target.classList.remove('Selected-Guest')
            this.setState(prevState => {
                return {selectedGuests: prevState.selectedGuests - 1}
            })
            console.log(target)
        }
        else  {
            target.classList.add('Selected-Guest')
            this.setState(prevState => {
                return {selectedGuests: prevState.selectedGuests + 1}
            })
            console.log(target)
        }
        
    }
    */