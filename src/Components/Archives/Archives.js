import React, {Component} from 'react';
import "./Archives.css";
import Book from "./../Book/Book";
// import {Link} from "react-router-dom";
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

        this.getBooks = this.getBooks.bind(this)
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
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
            <div id="archives-background">
                <div>
                    {this.state.archives.map((book, i) => {
                        return (
                            <Book
                            image={book.image} />
                        )
                    })}
                </div>
            </div>
        )
    }
}