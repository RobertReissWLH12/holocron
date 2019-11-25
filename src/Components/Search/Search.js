import React, {Component} from 'react'
import "./Search.css"

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            // title: '',
            // author: '',
            // pages: '',
            // characters: [],
            // img: ''
        }
    }

    render() {
        return (
            <div className="search-background">
                <div className="lightsaber-hilt"></div>
                <div className="lightsaber-blade"></div>
                <div className="R2"></div>
                <div className="R2-beam"></div>
            </div>
        )
    }
}