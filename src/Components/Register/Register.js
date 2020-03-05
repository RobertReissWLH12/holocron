import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Register.css'
import { updateUserInfo } from './../../ducks/reducer'
import { connect } from 'react-redux'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password1: '',
      password2: ''
    }
  }


  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  register = () => {
    if (this.state.password1 === this.state.password2) {
      const { email, username, password1, password2 } = this.state
      axios
        .post('/auth/register', { email, username, password1, password2 })
        .then(res => {
          // console.log(res.data)
          this.props.updateUserInfo(res.data.user)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    } else {
      console.log('passwords do not match')
    }
  }

  render() {
    return (
      <div className="register-background">
        <div className="register-officer"></div>
        <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet"></link>
        {/* <div className="register-container"></div> */}
          <h1>" Who is this?  What's your operating number? "
          <div id="officer-line"></div>
          </h1>
        <div className='box-artwork' alt=''>
          {/* <div className="four-inputs"> */}
            <input id="email"
              value={this.state.email}
              onChange={e => this.handleChange('email', e.target.value)}
              placeholder="Email"
              type="text"
            />
            <input id="username-register"
              value={this.state.username}
              onChange={e => this.handleChange('username', e.target.value)}
              placeholder="Username"
              type="text"
            />
            <input id="password1"
              value={this.state.password1}
              onChange={e => this.handleChange('password1', e.target.value)}
              placeholder="Password"
              type="password"
            />
            <input id="password2"
              value={this.state.password2}
              onChange={e => this.handleChange('password2', e.target.value)}
              placeholder="Retype password"
              type="password"
            />
          {/* </div> */}
          <Link to="/">
            <button className="register-submit" onClick={this.register}>Register</button>
          </Link>
          <Link to="/login">
            <h4>Already have an account? Login here!</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)