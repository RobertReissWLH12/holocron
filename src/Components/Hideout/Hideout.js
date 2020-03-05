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
                                <div className="hondo-container"></div>
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

                                {/* MOBILE VERSION (LOGGED IN) */}
                                <div className="mobile-hideout-textbox">
                                    <p>Unfortunately, my Fight Pit and Treasure Room are undergoing renovations right now.  In the meantime, you can choose a portrait for yourself in the Guests area as well as manage your favorite books in the Contracts section.  Enjoy your stay in Hondo's Hideout!</p>
                                    </div>

                                    <div className="hondoLogin-character"></div>
                                <div className="mobile-links-container">
                                    
                                    <Link to="/contracts">
                                        <button id="mobile-contracts-button" onClick={this.contracts}></button>
                                    </Link>
                                    
                                    
                                    <Link to="/guests">
                                        <button id="mobile-guests-button" onClick={this.guests}></button>
                                    </Link>
                                    
                                
                                    <Link to="/quiz">
                                        <button id="mobile-quiz-button" onClick={this.quiz}></button>
                                    </Link>
                                    <Link to="/treasures">
                                        <button id="mobile-treasures-button" onClick={this.treasures}></button>
                                    </Link>
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
