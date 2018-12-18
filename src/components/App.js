import React, { Component, Fragment } from 'react';
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
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/question/:id' component={QuestionPage} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route component={NoMatch} />
                  </Switch>
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
