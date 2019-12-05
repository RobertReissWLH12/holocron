import React, {Component} from 'react';
import "./Guests.css"

export default class Guests extends Component {
    constructor() {
        super()
        this.state = {         
            img: ''
        }
    }

    render() {
        return (
            <div className="guests-background"></div>
        )
    }
}