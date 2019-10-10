import React, { Fragment, useState, useEffect } from 'react';
import '../App.css';
import Home from './Home'
import Login from './Login'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Nav from './Nav'
import NoMatch from './NoMatch'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Leaderboard from './Leaderboard'
import useStyles from '../styles'
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



function App(props) {
  const { authedUser } = props
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    props.dispatch(handleInitialData())
  })

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
            <div className={classes.root}>
              <CssBaseline />
                { !authedUser
                  ? <Login />
                  :
                  <Fragment>
                    <AppBar
                      position="fixed"
                      className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                      })}
                    >
                      <Toolbar>
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          onClick={handleDrawerOpen}
                          edge="start"
                          className={clsx(classes.menuButton, open && classes.hide)}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Toolbar>
                    </AppBar>
                    <Drawer
                      className={classes.drawer}
                      variant="persistent"
                      anchor="left"
                      open={open}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                    >
                      <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                      </div>
                      <Nav open={open}/>
                    </Drawer>
                    <main
                      className={clsx(classes.content, {
                        [classes.contentShift]: open,
                      })}>
                      <div className="App">
                        <Switch>
                          <Route exact path='/' component={Home} />
                          <Route path='/question/:id' component={QuestionPage} />
                          <Route path='/add' component={NewQuestion} />
                          <Route path='/leaderboard' component={Leaderboard} />
                          <Route component={NoMatch} />
                        </Switch>
                      </div>
                    </main>
                  </Fragment>
                }
              </div>
            </Fragment>
          </Router>
    );
}

function mapStateToProps({ authedUser }){
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
