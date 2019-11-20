import React, { Component } from 'react'
import "./Home.css"

export default class Home extends Component {

    render() {
        return (
            <div>
            <h1 className="home-container">
                Home
            <img src="/assets/background_complete.jpg" className="home-background" alt="" />
                </h1>
            </div>
        )
    }
}