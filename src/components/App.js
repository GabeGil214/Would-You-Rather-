import React, { Component, Fragment } from 'react';
import '../App.css';
import Home from './Home'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            { !authedUser
              ? <Login />
              : <div>
                  <Nav />
                  <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/new' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                  </div>
                </div>
            }
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser }){
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
