import React, {Component} from 'react';
import "./Treasures.css"

export default class Treasures extends Component {
    constructor() {
        super()
        this.state = {         
            img: ''
        }
    }

    render() {
        return (
            <div className="treasures-background"></div>
        )
    }
}