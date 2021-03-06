import React, { Component } from 'react';
import "./Search.css";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBook from "./../Search/SearchBook";
import axios from 'axios';
import Swal from 'sweetalert2';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            archives: [],
            user_favorites: [],
            modalActivate: false,
            searchTerm: '',
            book: '',
            filter: '',
            smallNum: 0,
            bigNum: 1,
            toggleR2: false
        }

        this.getBooks = this.getBooks.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount() {
    //     this.getBooks();
    // }

    getBooks = () => {
        axios
            .get(`/api/archives?title=${this.state.searchTerm}`)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    archives: res.data,
                    toggleR2: true
                })
            })
            .catch(err => console.log(err))
    }

    addFavorite = (id) => {
        axios
            .post("/api/archives", { archives_id: id })
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
            bigNum: this.state.bigNum + 1,
            smallNum: this.state.smallNum + 1
        })
    }

    decrement = () => {
        this.setState({
            bigNum: this.state.bigNum - 1,
            smallNum: this.state.smallNum - 1
        })
    }

    handleChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    displayBeam() {
        return (
            <div className="R2-beam-outer">
                <div className="R2-beam"></div>
                <div className="MobileR2_Beam"></div>
                {this.state.smallNum < 1 ? (null) : <button onClick={() => this.decrement()} className="search-prev"></button>}
                {this.state.bigNum > this.state.archives.length - 1 ? (null) : <button onClick={() => this.increment()} className="search-next"></button>}

            </div>
        )
    }

    render() {
        // console.log(this.state.searchTerm)
        let filteredArchives = this.state.archives.filter((book, i) => i < this.state.bigNum && i >= this.state.smallNum)
        return (
            <div className="search-background">
                <div className="lightsaber-container">
                    <div className="lightsaber-hilt">
                        <div className="magnifying-glass"
                            onClick={this.getBooks}>
                        </div>
                    </div>
                    <div className="lightsaber-blade">
                        <input
                            type="text"
                            className="searchbar"
                            placeholder="Find an Entry..."
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                </div>
                <div className="books-hologram-container">
                    <div id="books-hologram">
                        {filteredArchives.map((book, i) => {
                            // console.log(book)
                            return (
                                <SearchBook
                                    onClick={this.modalFn}
                                    book={book} />
                            )
                        })}
                    </div>
                </div>
                <div className="R2"></div>
                <div className="MobileR2"></div>

                {/* CONDITIONAL RENDERING FOR R2 BEAM */}
                <div>
                    {
                        this.state.toggleR2 ?

                            this.displayBeam()
                            // <div className="R2-beam"></div>
                            : null
                    }
                </div>

                {/* MODAL */}
                {this.state.modalActivate &&
                    <div className="modal-master">
                        <div className="modal-content">
                            {/* Modal Body */}
                            <div className="modal-body">
                                <div className="modal-header">
                                    <span className="close" data-dismiss="modal-content" onClick={() => this.setState({
                                        modalActivate: false
                                    })
                                    }>&times;</span>
                                    <h2>{this.state.book.title}</h2>
                                </div>
                                <div className="modal-bookInfo">
                                    <div className="mobile-modal-image">
                                        <img className="popup-image" src={`/assets/Archives_Books/${this.state.book.image}`} alt="book-cover" />
                                    </div>
                                    <p>Author: {this.state.book.author}</p>
                                    <p>{this.state.book.pages} pages</p>
                                    <p>Major Characters: {this.state.book.characters}</p>
                                    <p id="summary">{this.state.book.summary}</p>
                                </div>
                                <div className="modal-image">
                                    <img className="popup-image" src={`/assets/Archives_Books/${this.state.book.image}`} alt="book-cover" />
                                </div>
                                {this.props.user_id &&
                                    <div>
                                        <button className="add"
                                            onClick={() => this.addFavorite(this.state.book.archives_id)}
                                        ></button>
                                        <div className="mobile-addContainer">
                                            <button className="mobile-add"
                                                onClick={() => this.addFavorite(this.state.book.archives_id)}
                                            ></button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        {/* <div class="overlay"></div> */}
                    </div>
                }
                {/* <button onClick={() => this.decrement()} className="search-prev"></button>
                <button onClick={() => this.increment()} className="search-next"></button> */}
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Search))
