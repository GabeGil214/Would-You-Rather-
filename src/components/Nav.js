import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../Nav.css'

class Nav extends Component {
  render() {
    return (
      <div className="nav-header">
        <div className='user-info-container'>
          <div className='user-image'>
          </div>
          <div className='text-container'>
            <p>Username</p>
            <a>Logout</a>
          </div>
        </div>
        <div className='nav-links'>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/new" activeClassName="active">New question</NavLink>
          <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
        </div>
      </div>
    )
  }
}

export default Nav
