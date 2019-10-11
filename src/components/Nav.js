import React, { useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { GoogleLogout } from 'react-google-login'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import useStyles from '../styles'
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import Divider from '@material-ui/core/Divider';
import '../Nav.css'

function Nav(props) {
  const { dispatch } = props;
  const { user } = props;
  const classes = useStyles();
  const theme = useTheme();

  function handleLogout(e) {

    dispatch(showLoading())
    setTimeout(function(){
      dispatch(setAuthedUser(null))
      dispatch(hideLoading())
    }, 500)
  }

  return (
      <Fragment>
        <Divider />
        <List>
          <ListItem>
            <div className='user-info-container'>
              <div className='user-image'>
                { user && (
                    <img src={user.avatarURL} alt={user.id} height='100' width='100' />
                )}
              </div>
              <div className='text-container'>
                { user && (
                  <p>{user.name}</p>
                )}
                <GoogleLogout
                  className="logout-button"
                  buttonText="Logout"
                  onLogoutSuccess={handleLogout}/>
              </div>
            </div>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key='Home'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </ListItem>
          <ListItem button key='New Question'>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <NavLink to="/add" activeClassName="active">New question</NavLink>
          </ListItem>
          <ListItem button key='Leaderboard'>
            <ListItemIcon><FormatListNumberedIcon /></ListItemIcon>
            <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
          </ListItem>
        </List>
      </Fragment>

  )
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser]

  return {
    user,
  }
}

export default connect(mapStateToProps)(Nav)
