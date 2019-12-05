//  IS THE REST OF YOUR PROJECT DONE?  IF NOT, THEN GO AWAY!!!

import React, {Component} from 'react'
import "./Quiz.css"

export default class Quiz extends Component {
    constructor() {
        super()
        this.state = {         
            img: ''
        }
    }

    render() {
        return (
            <div className="quiz-background"></div>
        )
    }
}