import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import { handleUserLogin } from '../actions/shared'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Login extends Component {
  responseGoogle = (response) => {
    console.log(response)
  }
  handleLogin = (response) => {
    const { dispatch } = this.props
    let { users } = this.props
    const googleProfile = response.profileObj

    dispatch(handleUserLogin(googleProfile, users))
  }
  render() {
    return (
      <div className="login-container">
        <h1>Would You Rather...?</h1>
        <p>Please log in with your Google account</p>
        <GoogleLogin
          clientId="576570629915-87hr2jdpq9vi50fjil4ib7k3f02r8ch7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.handleLogin}
          onFailure={this.responseGoogle}/>
      </div>
    )
  }
}

function mapStateToProps({ users }){
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)
