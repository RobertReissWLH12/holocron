import React, {Component} from 'react';
// import './Portrait.css';

export default class Portrait extends Component {

    // NO STATE!!!

    render() {
        console.log(this.props)
        return (
            <div className="portrait-list">
                <div className="portrait-textbox">
                    <div className="portrait-buttonbox">

                    </div>
                    <img
                    onClick={() => this.props.onClick(this.props.portrait)}
                    className="portrait-frame"
                    alt="portrait frame"
                    src={`/assets/ProfilePics/${this.props.portrait.image}`} />
                </div>
            </div>
        )
    }
}