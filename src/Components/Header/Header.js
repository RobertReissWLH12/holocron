import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios';
import LoggedInUser from './LoggedInUser'

class Header extends Component {
        
        Logout = () => {
            axios
            .delete('/auth/logout')
            .then(res => {
                this.props.updateUserInfo({
                    username: '',
                    user_id: ''
                })
            })
        }
        
        render() {
            
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
                            <Link to="/login">
                                <button id="login-button" onClick={this.login}>Login</button>
                            </Link>
                            <Link to="/register">
                                <button id="register-button" onClick={this.register}>Register</button>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-container">
                        <Link to="/">
                            <button id="home-button" onClick={this.home}>Home</button>
                        </Link>
                        <Link to="/search">
                            <button id="search-button" onClick={this.search}>Search</button>
                        </Link>
                        <Link to="/archives">
                            <button id="archives-button" onClick={this.archives}>Archives</button>
                        </Link>
                        <Link to="/hideout">
                            <button id="hideout-button" onClick={this.hideout}>Hideout</button>
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