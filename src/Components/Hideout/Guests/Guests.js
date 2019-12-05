import React, {Component} from 'react';
import "./Guests.css";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
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

    render() {
        console.log(this.props)
        return (
            <div className="guests-background">
                <div id="portraits-display">
                
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Guests))