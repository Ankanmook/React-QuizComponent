import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }

    render() {
        const isQuizEnd = () => {
            return this.state.quiz_position - 1 === this.state.quiz_position.length
        };

        return (
            <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                <QuizEnd isQuizEnd={isQuizEnd} />
            </div>
        )
    }
}

export default Quiz