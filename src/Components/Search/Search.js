import React, { Component } from 'react'
import "./Search.css"
import axios from 'axios';

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            archives: [],
            newBooks: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateArray = this.updateArray.bind(this)
    }

    componentDidMount() {
        axios
            .get('/api/archives')
            .then(res => {
                this.setState({
                    archive: res.data
                })
            })
    }

    handleChange(e) {
        // console.log(e.target.value)
        let update = () => {
            let filteredResults = this.state.archives.filter(entry => entry.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            // console.log(filteredResults)
            this.setState({
                newBooks: filteredResults
            })
        }

        this.setState({
            searchTerm: e.target.value
        },

            () => update())
    }

    updateArray(arr) {
        this.setState({
            newBooks: arr
        })
    }

    render() {
        return (
            <div className="search-background">
                <div className="lightsaber-hilt"></div>
                <button
                    className="magnifying-glass"
                    onKeyPress={this.onEnter}
                    onClick={this.onSearchClick}
                >
                </button>
                <div className="lightsaber-blade">
                    <input
                        type="text"
                        className="searchbar"
                        placeholder="Find an Entry..."
                    />
                </div>
                {this.state.archives.map(el => (
                    <p
                        key={el.id}
                        id={el.id}
                        data={el}
                        updateArray={this.updateArray}
                    />
                ))}
                <div className="R2"></div>
                <div className="R2-beam"></div>
            </div>
        )
    }
}

