import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
// import axios from 'axios';

//  ***  DONATE LINK AND LOGIN GO IN HERE ***
//  ***  ALL OF FOUR NAVBAR LINKS WILL GO IN HERE AS WELL!!! ***

export default class Header extends Component {



    render() {
        return (
            <header>
                <div className="header">
                    {/* <img src={whateverItsCalled} className="whateverItsCalled" alt="" /> */}
                    <div className="header-topHalf-container">

                        <h4 className="donate-button">
                            <Link to="/donate">
                                <button onClick={this.donate}>Make a Donation</button>
                            </Link>
                        </h4>
                        <div className="title-div">The Holocron</div>
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
                        <Link to="/home">
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
            </header >
        )
    }
}