import React, {Component} from 'react'
// import "./Archives.css"

export default class Archives extends Component {
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
            <div>Archives</div>
        )
    }
}