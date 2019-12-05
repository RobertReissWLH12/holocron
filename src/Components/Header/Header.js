import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios';
import LoggedInUser from './LoggedInUser'

class Header extends Component {
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

    logout = () => {
        
        axios
        .delete('/auth/logout')
        .then(res => {
            // console.log(res.data)
            this.props.updateUserInfo({
                username: '',
                user_id: ''
            })
        })
    }

    render() {
        // console.log(this.props.profile_img)
        return (
            <div>
                <div className="header">
                    {/* <img src={whateverItsCalled} className="whateverItsCalled" alt="" /> */}
                    <div className="header-topHalf-container">
                        <h4 className="donate-button-styling">
                            <Link to="/donate">
                                <button className="donate-button" onClick={this.donate}></button>
                            </Link>
                        </h4>
                        <div className="title-div"></div>
                        <div className="login-div">

                            {
                                this.props.user_id ?
                                    (
                                        <Link to="/">
                                        <button className=""id="logout-button" onClick={() => this.logout()}></button>
                                        </Link>
                                    ) : (
                                        <div>
                                            <Link to="/login">
                                                <button id="login-button" onClick={this.login}></button>
                                            </Link>
                                            <Link to="/register">
                                                <button id="register-button" onClick={this.register}></button>
                                            </Link>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                    <div className="navbar-container">
                        <Link to="/">
                            <button id="home-button" onClick={this.home}></button>
                        </Link>
                        <Link to="/search">
                            <button id="search-button" onClick={this.search}></button>
                        </Link>
                        <Link to="/archives">
                            <button id="archives-button" onClick={this.archives}></button>
                        </Link>
                        <Link to="/hideout">
                            <button id="hideout-button" onClick={this.hideout}></button>
                        </Link>
                    </div>
                </div>
                <LoggedInUser
                    logout={this.logout}
                />
            </div >
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUserInfo })(Header)