import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios';
import LoggedInUser from './LoggedInUser'
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            user_id: '',
            sideDrawerOpen: false
        }
        this.getUser = this.getUser.bind(this)
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

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
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        // console.log(this.props)
        return (
            <div>
                <div style={{ height: '100%' }}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    {/* <main style={{marginTop: '64px'}}></main> */}
                </div>
                <div className="header">
                    {/* <img src={whateverItsCalled} className="whateverItsCalled" alt="" /> */}
                    <div className="header-topHalf-container">
                        {/* <h4 className="donate-button-styling"> */}
                        <Link to="/donate">
                            <button className="donate-button" onClick={this.donate}></button>
                        </Link>
                        {/* </h4> */}
                        <div className="title-div"></div>
                        <div className="login-div">
                            {
                                this.props.user_id ?
                                    (
                                        <div className="loggedInLayout">
                                            <Link to="/donate">
                                                <button className="mobile-donate-button" onClick={this.donate}></button>
                                            </Link>
                                            <div className="mobile-pictureFrameContainer">
                                                <div className="mobile-pictureFrame"></div>
                                            </div>
                                            <div>
                                                <img
                                                    className="header-portrait"
                                                    alt=''
                                                    src={`/assets/ProfilePics/${this.props.profile_img}`} />
                                            </div>
                                            <div className="mobile-header-portraitContainer">
                                                <img
                                                    className="mobile-header-portrait"
                                                    alt=''
                                                    src={`/assets/ProfilePics/${this.props.profile_img}`} />
                                            </div>
                                            <Link to="/">
                                                {/* <div className="profile-section"> */}
                                                {/* <div id="portrait-ring"></div> */}
                                                <button id="logout-button" onClick={() => this.logout()}></button>
                                                {/* </div> */}
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="loggedOutLayout">
                                            <Link to="/donate">
                                                <button className="mobile-donate-button" onClick={this.donate}></button>
                                            </Link>
                                            <div id="holocron-profilePicture"></div>
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