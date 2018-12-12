import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { GoogleLogout } from 'react-google-login'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import '../Nav.css'

class Nav extends Component {

  handleLogout = (e) => {
    const { dispatch } = this.props

    dispatch(showLoading())
    setTimeout(function(){
      dispatch(setAuthedUser(null))
      dispatch(hideLoading())
    }, 500)
  }
  render() {
    const { user } = this.props

    return (
      <div className="nav-header">
        <div className='user-info-container'>
          <div className='user-image'>
            { user && (
                <img src={user.avatarURL} height='100' width='100' />
            )}
          </div>
          <div className='text-container'>
            { user && (
              <p>{user.name}</p>
            )}
            <GoogleLogout
              className="logout-button"
              buttonText="Logout"
              onLogoutSuccess={this.handleLogout}/>
          </div>
        </div>
        <div className='nav-links'>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/add" activeClassName="active">New question</NavLink>
          <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser]

  return {
    user,
  }
}

export default connect(mapStateToProps)(Nav)
