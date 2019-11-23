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
            book: ''
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


    render() {
        return (
            <div className="archives-background">
                <div id="books-display">
                    {this.state.archives.map((book, i) => {
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
                        <div id="myModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p></p>
                            </div>
                        </div>
                        {/* Modal Content */}
                        <div class="modal-content">
                            <div class="modal-header">
                                <span class="close">&times;</span>
                                <h2>{this.state.book.title}</h2>
                            </div>
                            <div class="modal-body">
                                <p>{this.state.book.author}</p>
                                <p>{this.state.book.pages}</p>
                                <p>{this.state.book.characters}</p>
                            </div>
                            <div class="modal-footer">
                                <h3>Modal Footer</h3>
                            </div>
                        </div>
                    </div>
                }
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