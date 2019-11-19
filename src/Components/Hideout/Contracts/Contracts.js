import React, {Component} from 'react'

export default class Contracts extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            pages: '',
            characters: [],
            summary: '',
            img: ''
        }
    }

    render() {
        return (
            <div>Contracts</div>
        )
    }
}