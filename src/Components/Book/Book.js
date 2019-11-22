import React, {Component} from 'react'

export default class Book extends Component {
    
    // NO STATE!!!

    render() {
        console.log(this.props)
        return (
            <div className="list">
                <div className="textbox">
                    <div className="buttonbox">
                        
                    </div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.author}</p>
                    <p>{this.props.pages}</p>
                    <p>{this.props.characters}</p>
                    <img
                    className="book-cover"
                    alt="book cover"
                    src={`../../assets/${this.props.image}`} />
                </div>
            </div>
        )
    }
}