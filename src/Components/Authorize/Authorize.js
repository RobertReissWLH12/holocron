import React, {Component} from 'react';
import './Auth.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {updateUserInfo} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Authorize extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    register = () => {
        const {username, password} = this.state
        axios
        .post('/auth/register', {username, password})
        .then(res => {
            this.props.updateUserInfo(res.data.user)
        })
        .catch(err => {
            console.log(err.response.data.message)
        })
    }

    render() {
        return (
            <div className="Authorize">
                <div className="authorize-container">
                    <h1>Welcome to the Holocron!</h1>
                    <div className="two-input">
                        <input
                        placeholder="Username"
                        type="text"
                        onChange={e => this.handleChange('username', e.target.value)}
                        value={this.state.username}
                        />
                        <input
                        placeholder="Password"
                        type="password"
                        onChange={e => this.handleChange('password', e.target.value)}
                        value={this.state.password}
                        />
                    </div>
                    <Link to="/">
                        <button onClick={this.login}>Login</button>
                    </Link>
                    <Link to="/">
                        <button onClick={this.register}>Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}
const mapDispatchToProps = {
    updateUserInfo
}

export default connect (mapStateToProps, mapDispatchToProps)(Auth)