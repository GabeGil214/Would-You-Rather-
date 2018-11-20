import React, { Component } from 'react'
import Question from './Question'


//This is a container component
class QuestionList extends Component {
  render() {
    return (
      <div>
        <Question preview={false}/>
        <Question preview={true}/>
        <Question preview={true}/>
      </div>
    )
  }
}

export default QuestionList
