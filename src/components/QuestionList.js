import React, { Component } from 'react'
import Question from './Question'

class QuestionList extends Component {
  render() {
    return (
      <div>
        <Question />
        <Question />
        <Question />
      </div>
    )
  }
}

export default QuestionList
