import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios';

class LoggedInUser extends Component {
    
    componentDidMount() {
        axios
        .get('/auth/getUser')
        .then(res => {
            this.props.updateUserInfo({
                username: res.data.username,
                user_id: res.data.user_id,
                profile_img: res.data.profile_img,
                email: res.data.email
            })
        })
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {updateUserInfo})(LoggedInUser)