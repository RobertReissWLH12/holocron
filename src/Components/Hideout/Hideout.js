import React, { Component } from 'react'
import './Hideout.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
// import Contracts from './Contracts/Contracts'
// import Guests from './Guests/Guests'
// import Quiz from './Quiz/Quiz'
// import Treasures from './Treasures/Treasures'

class Hideout extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            user_id: ''
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
                this.setState({
                    username: '',
                    user_id: ''
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {
                    !this.props.user_id ?
                        (
                            <div className="hideout-background-noLogin">
                                <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" 
                                rel="stylesheet">                                    
                                </link>
                                <div id="warning-container">
                                    <p id="hondo-warning">Hello there, my friend!  My name is Hondo, and this is my hideout!  What?!  You do not know of the great pirate, Hondo?  Well, that actually does not matter.  What is more important is that I do not know YOU!  Please login so that you may be allowed to see all the treasures that await you in Hondo's Hideout!</p>
                                </div>
                                <div id="fingerWave"></div>
                            </div>
                        ) : (
                            <div className="hideout-background-Login">
                                <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" 
                                rel="stylesheet">               
                                </link>
                                <div className="hideout-links-left">
                                    <div className="contracts-container">
                                    <Link to="/contracts">
                                        <button id="contracts-button" onClick={this.contracts}>
                                            <p class="contracts-text">In this room, you can view all of the books you have added to your favorites list.  I like to think of them as "contracts"...</p>
                                        </button>
                                    </Link>
                                    </div>
                                    <div className="guests-container">
                                    <Link to="/guests">
                                        <button id="guests-button" onClick={this.guests}>
                                            <p class="guests-text">This area allows you to choose which prisoner - I mean "guest" - you would like to be!</p>
                                        </button>
                                    </Link>
                                    </div>
                                </div>
                                <div className="hideout-links-right">
                                    <div className="quiz-container">
                                    <Link to="/quiz">
                                        <button id="quiz-button" onClick={this.quiz}>
                                            <p class="quiz-text">If you have finished a contract, enter The Pit and fight to show just how much you truly remember of your adventures.  Win and you will be rewarded with a badge!</p>
                                        </button>
                                    </Link>
                                    </div>
                                    <div className="treasures-container">
                                    <Link to="/treasures">
                                        <button id="treasures-button" onClick={this.treasures}>
                                            <p class="treasures-text">If you achieve victory in the Fight Pit, any badges you receive will be available to view here.  You can also choose one to be your profile picture!</p>
                                        </button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {})(Hideout)
