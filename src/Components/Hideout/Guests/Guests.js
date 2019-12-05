import React, {Component} from 'react';
import "./Guests.css";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { thisExpression } from '@babel/types';



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

    render() {
        console.log(this.state)
        let allPortraits = this.state.portraits.map((portrait, i) => {
            return(
                <img
                onClick={() => (portrait)} 
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

export default withRouter(connect(mapStateToProps, {})(Guests))