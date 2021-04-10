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
        }
    }

    handleInputChange(answer) {
        this.props.handler(answer.target.value)
        this.setState({selectedAnswer: answer.target.value})
        answer.target.classList.toggle("Selected")
        console.log(this.state.answers)
    }

    render() {
        let answersList = this.state.answers.map((answer) => {
            return <input key = {answer} onClick = {this.handleInputChange}  type = "button" className = "Answer-Choice" value = {answer} />
        })

        return (
            <div className = "Answer-Container">
                <p className = "Question-Font">{this.state.question}</p>
                {answersList}
            </div>
        )
    }
}
