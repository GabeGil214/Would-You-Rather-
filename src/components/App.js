import React, { Component } from 'react';
import '../App.css';
import Home from './Home'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <Nav />
        {/*Create Routes for each of these components*/}
        <Home />
        {/*<NewQuestion />*/}
        {/*<Question />*/}
      </div>
    );
  }
}

export default connect()(App);
