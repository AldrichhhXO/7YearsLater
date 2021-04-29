import { Component } from 'react'
import './Questionaire.css'
import UserModal from '../../Components/UserModal/UserModal'
import SurveyContainer from '../../Containers/SurveyContainer/SurveyContainer'
import Instance from '../../API/Axios'
import { Redirect } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

/**
 * @name Questionaire Page
 * @description Page that handles the RSVP questions for the guest
 */
export default class Questionaire extends Component {
    constructor(props) {
        super(props);
        try {
            this.state = {  
                users: this.props.location.state.users,
                secondUser: false,
                userName: this.props.location.state.users[0].FirstName, 
                userName2: '',
                userID: [ this.props.location.state.users[0].UserID ], 
                chosen: false, // For the userModal
                answer1: '',
                answer2: '',
                answer3: '',
                text: '',
                success: false,
                num: 0 
            }

            let body = this.state.userID[0]
            Instance.get(`/api/rsvp/qa/${body}`)
                .then(res => {
                    
                    if (res.data.user.length > 0 ) {
                        this.state.users.push(res.data.user[0])
                        this.setState({userName2: res.data.user[0].FirstName})
                    }                    
                    this.forceUpdate()
                })
                .catch(err => {
    
                })
                
    
        }
        catch {
            window.location = "/rsvp"
        }
        

    }

    componentDidMount() {
        document.title = "7YearsLater | Questions before Party time!"
    }

    handlePollAnswers = (e) => {
        e.preventDefault()
        let body = {
            userID: this.state.userID, 
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer3: this.state.answer3,
            text: this.state.text,
        }
        
        Instance.post('/api/rsvp/qa', body)
            .then(res => {
                this.setState({success: true})
            })
            .catch(err => {

            })
    }
    
    selectGuest = (e) => {
        e.preventDefault()
        let array = this.state.userID
        let contains = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === e.target.id) contains = true;
        }
        if (contains) {
            array.pop()
        }
        else {
            (array.push(Number(e.target.id) ))
        }
    }

    modalHandler = (e) => {
        e.preventDefault()
        this.setState({chosen: true})
        if (this.state.userID.length > 1) this.setState({secondUser: true})
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
        if (this.state.success) return <Redirect to = {{pathname: '/rsvp/success', state: {name: this.state.userName }}}/>
        return (
            <div className = "Questionaire-Container">
                <Spinner welcome = "Choose your Liquor" />
                {  !this.state.chosen && this.state.users.length > 1 ? <UserModal mainUser = {this.state.userName} buttonHandler = {this.selectGuest} modalHandler = {this.modalHandler} users = {this.state.users} /> : null  }
                <div className = "Left-Image"></div>
                <div className = "Right-Content">
                    <h1 className = "Questionaire-Greeting">Welcome, {this.state.userName}!</h1>
                    
                    <SurveyContainer 
                        answer1 = {this.state.answer1}
                        answer2 = {this.state.answer2}
                        answer3 = {this.state.answer3}
                        user1 = {this.state.userName}
                        secondUser = {this.state.secondUser}
                        user2 = {this.state.userName2}
                        text = {this.state.text} 
                        stringLength = {this.state.num} 
                        handleAnswer1  = {this.updateAnswer1}
                        handleAnswer2 = {this.updateAnswer2}
                        handleAnswer3= {this.updateAnswer3}
                        handleText = {this.updateText}
                        handleAnswers = {this.handlePollAnswers}
                        /> 
                </div>
            </div>
        )   
    }
}
