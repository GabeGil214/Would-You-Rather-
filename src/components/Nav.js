import React, { Component } from 'react'
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
          <a>Home</a>
          <a>New question</a>
          <a>Leaderboard</a>
        </div>
      </div>
    )
  }
}

export default Nav
