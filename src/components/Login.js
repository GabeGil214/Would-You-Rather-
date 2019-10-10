import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { handleUserLogin } from '../actions/shared'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import useStyles from '../styles'

function Login(props) {
  const classes = useStyles();

  function responseGoogle(response) {
    alert(response)
  }

  function handleLogin(response) {
    const { dispatch } = props;
    let { users } = props;
    const googleProfile = response.profileObj;

    dispatch(handleUserLogin(googleProfile, users))
  }

  return (
      <Container maxWidth="sm" className={classes.middle}>
        <h1>Would You Rather...?</h1>
        <p>Please log in with your Google account</p>
        <GoogleLogin
          clientId="576570629915-87hr2jdpq9vi50fjil4ib7k3f02r8ch7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={responseGoogle}/>
      </Container>
    )
}

function mapStateToProps({ users }){
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)
