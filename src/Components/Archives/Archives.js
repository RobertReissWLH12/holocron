import React, {Component} from 'react';
import "./Archives.css";
import {Link} from "react-router-dom";
import axios from 'axios';

export default class Archives extends Component {
    constructor() {
        super()
        this.state = {
            archives: []
            // title: '',
            // author: '',
            // pages: '',
            // characters: '',
            // summary: '',
            // img: ''
        }

        this.getArchives = this.getArchives.bind(this)
    }

    componentDidMount() {
        this.getArchives();
    }

    getArchives = () => {
        axios
        .get("/api/archives")
        .then(res => {
            this.setState({
                archives: res.data
            })
        })
        .catch(err => console.log(err))
    }




    render() {
        return (
            <div id="archives-background"></div>
        )
    }
}