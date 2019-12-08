import React, { Component } from 'react'
import "./Home.css"
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios'
// import LoggedInUser from '../Header/LoggedInUser'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            user_id: '',
            email: '',
            username: '',
            profile_img: ''
        }
        this.getUser = this.getUser.bind(this)
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        axios
            .get("/auth/getUser")
            .then(res => {
                // console.log(res.data)
                this.props.updateUserInfo({
                    username: res.data.username,
                    user_id: res.data.user_id,
                    profile_img: res.data.portrait,
                    email: res.data.email
                })
            })
    }

    render() {
        return (
            <div id="home-background">
                <div className="rocks-left">
                    <div id="rock-left1"></div>
                    <div id="rock-left2"></div>
                    <div id="rock-left3"></div>
                </div>
                <div className="rocks-right">
                    <div id="rock-right1"></div>
                    <div id="rock-right2"></div>
                    <div id="rock-right3"></div>
                </div>
                <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet"></link>
                <h3 className="welcome">Welcome to the Holocron!
                <div id="welcome-line"></div>
                </h3>
                <p className="paragraph">The Holocron is a fan-made website that allows people to keep track of their favorite Star Wars books.  Joining the site as a member is completely free, and will allow you to create your own personal list of favorite books - or maybe books that will become your favorites once you read them!  We are also working on the development of an achievement system that will reward you with badges for every book you finish.  Thanks for visiting The Holocron!</p>
                <div className="holocron-gif"></div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUserInfo })(Home)