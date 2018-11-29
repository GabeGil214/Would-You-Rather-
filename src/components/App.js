import React, { Component, Fragment } from 'react';
import '../App.css';
import Home from './Home'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
              <Route path='/' exact component={Home} />
              <Route path='/new' component={NewQuestion} />
              {/*<Question />*/}
            </div> }
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect()(App);
