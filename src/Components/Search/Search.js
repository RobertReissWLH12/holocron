import React, {Component} from 'react'
import "./Search.css"

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            pages: '',
            characters: [],
            img: ''
        }
    }

    render() {
        return (
            <div className="search-background">
                <div className="R2"></div>
                <div className="table"></div> 
            </div>
        )
    }
}