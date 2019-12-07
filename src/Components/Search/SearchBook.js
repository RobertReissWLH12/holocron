import React, {Component} from 'react'
import './SearchBook.css'

export default class SearchBook extends Component {
    
    // NO STATE!!!

    render() {
        // console.log(this.props)
        return (
            <div className="search-list">
                <div className="search-textbox">
                    <div className="search-buttonbox">
                        
                    </div>
                    <img
                    onClick={() => this.props.onClick(this.props.book)}
                    className="search-book-cover"
                    alt="search book cover"
                    src={`/assets/Search_Books/${this.props.book.search_image}`} />
                </div>
            </div>
        )
    }
}