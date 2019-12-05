import React, {Component} from 'react'
import './Book.css'

export default class Book extends Component {
    
    // NO STATE!!!

    render() {
        console.log(this.props)
        return (
            <div className="list">
                <div className="textbox">
                    <div className="buttonbox">
                        
                    </div>
                    <img
                    onClick={() => this.props.onClick(this.props.book)}
                    className="book-cover"
                    alt="book cover"
                    src={`/assets/Archives_Books/${this.props.book.image}`} />
                </div>
            </div>
        )
    }
}