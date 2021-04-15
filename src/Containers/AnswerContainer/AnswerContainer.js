import React, { Component } from 'react'
import './AnswerContainer.css'

export default class AnswerContainer extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            selectedAnswer: '',
            answers: props.answers,
            question: props.question,
            handler: props.handler,
            containerID: props.containerId
        }
    }

    handleInputChange(answer) {
        this.props.handler(answer.target.value)
        
        let buttons = document.getElementById(this.state.containerID).getElementsByClassName("Answer-Choice")
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('Selected')) buttons[i].classList.toggle("Selected")
        }
        answer.target.classList.toggle("Selected")
    }

    render() {
        let answersList = this.state.answers.map((answer) => {
            return <input key = {answer} onClick = {this.handleInputChange}  type = "button" className = "Answer-Choice" value = {answer} />
        })

        return (
            <div className = "Answer-Container" id = {this.state.containerID}>
                <p className = "Question-Font">{this.state.question}</p>
                {answersList}
            </div>
        )
    }
}
