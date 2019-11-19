import React, { Component } from 'react'
// import "./Header.css"
import {Link} from "react-router-dom"
// import axios from 'axios';

//  ***  DONATE LINK AND LOGIN GO IN HERE ***
//  ***  ALL OF FOUR NAVBAR LINKS WILL GO IN HERE AS WELL!!! ***

export default class Header extends Component {



    render() {
        return (
            <header>
                <div className="header">
                    {/* <img src={whateverItsCalled} className="whateverItsCalled" alt="" /> */}
                    <button onClick={this.register}>Register</button>
                    <Link to="/login">
                        <h4>Already have an account? Login here</h4>
                    </Link>
                    Header
                </div>
            </header >
        )
    }
}