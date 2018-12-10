import React, { Component } from 'react'
import Question from './Question'


//This is a container component
class QuestionList extends Component {
  this.state = {
    answered: false
  }
  render() {
    const { answered } = this.state

    return (
      <div>
        {answered
        ? this.props.answeredIds.map((id) => (
          <Question key={id} id={id}/>
        ))
        : this.props.unansweredIds.map((id) => (
          <Question key={id} id={id}/>
        ))}
      </div>
    )
  }
}

export default QuestionList
