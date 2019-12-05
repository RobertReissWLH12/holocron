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
                                <div id="fingerWave"></div>
                            </div>
                        ) : (
                            <div className="hideout-background-Login">
                                <div className="hideout-links-left">
                                    <Link to="/contracts">
                                        <button id="contracts-button" onClick={this.contracts}></button>
                                    </Link>
                                    <Link to="/guests">
                                        <button id="guests-button" onClick={this.guests}></button>
                                    </Link>
                                </div>
                                <div className="hideout-links-right">
                                    <Link to="/quiz">
                                        <button id="quiz-button" onClick={this.quiz}></button>
                                    </Link>
                                    <Link to="/treasures">
                                        <button id="treasures-button" onClick={this.treasures}></button>
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
