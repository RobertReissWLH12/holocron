import React, { Component } from 'react';
import "./Archives.css";
import Book from "./../Book/Book";
// import {Link} from "react-router-dom";
import axios from 'axios';

export default class Archives extends Component {
    constructor() {
        super()
        this.state = {
            archives: [],
            modalActivate: false,
            book: '',
            smallNum: 0,
            bigNum: 10
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

    modalFn = (currentBook) => {
        console.log(currentBook)
        this.setState({
            book: currentBook,
            modalActivate: !this.state.modalActivate
        })
    }

    increment = () => {
        this.setState({
            bigNum: this.state.bigNum + 10,
            smallNum: this.state.smallNum + 10
        })
    }

    decrement = () => {
        this.setState({
            bigNum: this.state.bigNum - 10,
            smallNum: this.state.smallNum - 10
        })
    }

    render() {
        let filteredArchives = this.state.archives.filter((book, i) => i < this.state.bigNum && i >= this.state.smallNum)
        return (
            <div className="archives-background">
                <div id="books-display">
                    {filteredArchives.map((book, i) => {
                        return (
                            <Book
                                onClick={this.modalFn}
                                book={book} />

                        )
                    })}
                </div>

                {/* Modal will go here */}
                {this.state.modalActivate &&
                    <div>
                        <button id="myBtn"></button>
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close">&times;</span>
                                <p></p>
                            </div>
                            {/* Modal Content */}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <span className="close">&times;</span>
                                    <h2>{this.state.book.title}</h2>
                                </div>
                                <div className="modal-body">
                                    <p>{this.state.book.author}</p>
                                    <p>{this.state.book.pages}</p>
                                    <p>{this.state.book.characters}</p>
                                    <p>{this.state.book.summary}</p>
                                </div>
                                <div className="modal-footer">
                                    <h3>{this.state.book.image}</h3>
                                </div>
                            </div>
                        </div>
                        {/* <div class="overlay"></div> */}
                    </div>
                }
                <button onClick={() => this.decrement()} className="prev">PREV</button>
                <button onClick={() => this.increment()} className="next">NEXT</button>
            </div>
        )
    }
}

// let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];

// btn.onClick = function () {
//     modal.style.display = "block";
// }

// span.onClick = function () {
//     modal.style.display = "none";
// }

// window.onClick = function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none"
//     }
// }