import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div className="nav-header">
        <div className='user-info-container'>
          <div className='user-image'>
          </div>
          <div>
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
