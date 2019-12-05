import React, {Component} from 'react';
import "./Guests.css";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {updateUserInfo} from '../../../ducks/reducer'
import axios from 'axios';



class Guests extends Component {
    constructor() {
        super()
        this.state = {
            portraits: []
        }

        this.getPortraits = this.getPortraits.bind(this)
    }

    componentDidMount() {
        this.getPortraits();
    }

    getPortraits = () => {
        axios
        .get("/api/portraits")
        .then(res => {
            console.log(res.data)
            this.setState({
                portraits: res.data
            })
        })
        .catch(err => console.log(err))
    }

    updatePortrait = (name) => {
        axios
        .put("/api/portraits", {name: name})
        .then(res => {
            // console.log(res.data)
            this.props.updateUserInfo({
                username: res.data.username,
                user_id: res.data.user_id,
                profile_img: res.data.portrait,
                email: res.data.email})
        })
        .catch(err => console.log(err))
        

    }

    render() {
        // console.log(this.props)
        let allPortraits = this.state.portraits.map((portrait, i) => {
            return(
                <img
                onClick={() => this.updatePortrait(portrait.image)} 
                className="portrait"
                alt="portrait"
                src={`/assets/ProfilePics/${portrait.image}`}
                />
            )
        })
        return (
            <div className="guests-background">
                <div id="portraits-display">
                    {allPortraits}
                
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default withRouter(connect(mapStateToProps, {updateUserInfo})(Guests))