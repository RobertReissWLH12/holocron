import React, { Component } from 'react';
import "./Archives.css";
import { withRouter } from 'react-router-dom';
import Book from "./../Book/Book";
import { connect } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';


class Archives extends Component {
    constructor() {
        super()
        this.state = {
            archives: [],
            user_favorites: [],
            modalActivate: false,
            book: '',
            smallNum: 0,
            bigNum: 10
        }

        this.getArchives = this.getArchives.bind(this)
    }

    componentDidMount() {
        this.getArchives();
    }

    getArchives = () => {
        axios
            .get("/api/allArchives")
            .then(res => {
                // console.log(res.data)
                this.setState({
                    archives: res.data
                })
            })
            .catch(err => console.log(err))
    }

    addFavorite = (id) => {
        axios
        .post("/api/archives", {archives_id: id})
        Swal.fire(
            'Added book to favorites!',
            `You can view your favorites list in the Contracts section of Hondo's Hideout.`,
            'success'
          )
        }
    

    modalFn = (currentBook) => {
        // console.log(currentBook)
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

    // handlePrevious = index => {
    //     if (this.state.index === 0) {
    //         this.setState({index: this.state.archives.length - 1})
    //     } else {
    //         this.setState({index: this.state.index - 1})
    //     }
    // }

    decrement = () => {
        this.setState({
            bigNum: this.state.bigNum - 10,
            smallNum: this.state.smallNum - 10
        })
    }

    render() {
        // console.log(this.props)
        let filteredArchives = this.state.archives.filter((book, i) => i < this.state.bigNum && i >= this.state.smallNum)
        return (
            <div className="archives-background">
                <div id="books-display">
                    {filteredArchives.map((book, i) => {
                        // console.log(book)
                        return (
                            <Book
                                onClick={this.modalFn}
                                book={book} />

                        )
                    })}
                </div>

                {/* MODAL */}
                {this.state.modalActivate &&
                    <div>
                        <div className="modal-content">
                            {/* Modal Body */}
                            <div className="modal-body">
                                <div className="modal-header">
                                    <span className="close" onClick={() => this.setState({
                                        modalActivate: false
                                    })
                                    }>&times;</span>
                                    <h2>{this.state.book.title}</h2>
                                </div>
                                <div className="modal-bookInfo">
                                    <p>Author: {this.state.book.author}</p>
                                    <p>{this.state.book.pages} pages</p>
                                    <p>Major Characters: {this.state.book.characters}</p>
                                    <p id="summary">{this.state.book.summary}</p>
                                </div>
                                <div className="modal-image">
                                    <img className="popup-image" src={`/assets/Archives_Books/${this.state.book.image}`} alt="book-cover" />
                                </div>
                                {this.props.user_id &&
                                    <button className="add"
                                    onClick={() => this.addFavorite(this.state.book.archives_id)}    
                                    ></button>
                                } 
                            </div>
                        </div>
                        {/* <div class="overlay"></div> */}
                    </div>
                }
                {this.state.smallNum < 1 ? (
                    null
                ) : <button onClick={() => this.decrement()} className="prev"></button> 
                }
                {this.state.bigNum > this.state.archives.length - 1 ? (null) : <button onClick={() => this.increment()} className="next"></button>}
                
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Archives))