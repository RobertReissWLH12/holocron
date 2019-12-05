import React, {Component} from 'react'
import "./Contracts.css";
import { withRouter } from 'react-router-dom'
import Book from "./../../Book/Book";
import { connect } from 'react-redux'
import axios from 'axios';

class Contracts extends Component {
    constructor() {
        super()
        this.state = {
            user_favorites: [],
            modalActivate: false,
            book: '',
            smallNum: 0,
            bigNum: 10
        }

        this.getFavorites = this.getFavorites.bind(this)
    }

    componentDidMount() {
        this.getFavorites();
    }

    getFavorites = () => {
        axios
        .get("/api/user_favorites")
            .then(res => {
                console.log(res.data)
                this.setState({
                    user_favorites: res.data
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

    removeFavorite = favorite_id => {
        axios
        .delete(`/api/user_favorites/${favorite_id}`)
        .then(() => {
            this.getFavorites();
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.props)
        let filteredFavorites = this.state.user_favorites.filter((book, i) => i < this.state.bigNum && i >= this.state.smallNum)
        return (
            <div className="contracts-background">
                <div id="books-display">
                    {filteredFavorites.map((book, i) => {
                        console.log(book)
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
                                    <button className="remove"
                                    onClick={() => this.removeFavorite(this.state.book.favorite_id)}    
                                    ></button>
                                } 
                            </div>
                        </div>
                        {/* <div class="overlay"></div> */}
                    </div>
                }
                <button onClick={() => this.decrement()} className="prev"></button>
                <button onClick={() => this.increment()} className="next"></button>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Contracts))