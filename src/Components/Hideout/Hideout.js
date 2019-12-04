import React, { Component } from 'react'
import './Hideout.css'
import axios from 'axios'
import { updateUserInfo } from '../../ducks/reducer'
// import LoggedInUser from './LoggedInUser'
// import {Link} from 'react-router-dom'
// import Contracts from './Contracts/Contracts'
// import Guests from './Guests/Guests'
// import Quiz from './Quiz/Quiz'
// import Treasures from './Treasures/Treasures'

export default class Hideout extends Component {
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
                console.log(res.data)
                this.setState({
                    username: '',
                    user_id: ''
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        // if (this.props.user_id) {

            return (
                <div className="hideout-background-noLogin">
                    <div id="fingerWave"></div>
                </div>
            )
        } //else {
            // return
        // }
    // }
}