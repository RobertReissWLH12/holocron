import React, { Component } from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { updateUserInfo } from './../../ducks/reducer'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'


class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  login = () => {
    console.log(this.state.username, this.state.password)
    const { username, password } = this.state
    axios
      .post('/auth/login', { username, password })
      .then(res => {
        console.log(res.data.user)
        this.props.history.push('/')
        this.props.updateUserInfo(res.data.user)
        Swal.fire(res.data.message)
      })
      .catch(err => {
        // Swal.fire(err.response.data.message)
      })
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-container" alt=''>
          <input
            onChange={e => this.handleChange('username', e.target.value)}
            value={this.state.username}
            placeholder="Username"
            type="text"
          />
          <input
            onChange={e => this.handleChange('password', e.target.value)}
            value={this.state.password}
            placeholder="Password"
            type="password"
          />
            <button onClick={this.login}>Login!</button>
          
          <Link to="/register">
            <h4>Need an account? Register here!</h4>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, { updateUserInfo })(Login)
)
// render() {

//   return (
//     <div className="title">Login</div>
//   );
// }
