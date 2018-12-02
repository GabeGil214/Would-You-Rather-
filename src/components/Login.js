import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'

class Login extends Component {
  responseGoogle = (response) => {
    console.log(response)
  }
  handleUserLogin = (response) => {
    const { dispatch, users } = this.props
    const googleProfile = response.profile

    dispatch(userLogin(googleProfile, users))
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="576570629915-87hr2jdpq9vi50fjil4ib7k3f02r8ch7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.handleUserLogin}
          onFailure={this.responseGoogle}/>
      </div>
    )
  }
}

export default Login
