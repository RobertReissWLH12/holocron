import React, { Component } from 'react'
import "./Home.css"

export default class Home extends Component {

    render() {
        return (
            <div id="home-background">
                <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet"></link>
                <h2 className="welcome">Welcome to the Holocron!</h2>
                <p className="paragraph">The Holocron is a fan-made website whose sole purpose is to encourage other fans of the Star Wars universe to enjoy reading novels throughout both the Star Wars Legends series and the current Del Rey canon.  Joining the site as a member is completely free, and will allow you to create your own personal list of favorite books - or maybe books that will become your favorites once you read them!  We are also working on the development of an achievement system that will reward you with badges on your account for every book you finish.  Thanks for visiting The Holocron!</p>
            </div>
        )
    }
}