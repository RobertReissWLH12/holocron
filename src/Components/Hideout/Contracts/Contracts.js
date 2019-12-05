import React, {Component} from 'react'
import "./Contracts.css";
// import { Link, withRouter } from 'react-router-dom'
// import Book from "./../../Book/Book";
// import { connect } from 'react-redux'
import axios from 'axios';

export default class Contracts extends Component {
    constructor() {
        super()
        this.state = {
            favorites: [],
            book: ''
        }

        this.getFavorites = this.getFavorites.bind(this)
    }

    componentDidMount() {
        this.getFavorites();
    }

    getFavorites = () => {
        axios
        .get("/api/archives")
            .then(res => {
                console.log(res.data)
                this.setState({
                    archives: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>Contracts</div>
        )
    }
}