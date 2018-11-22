import React, { Component } from 'react'
import { formatQuestion } from '../utils/helpers'
import { connect } from 'react-redux'

class Question extends Component {

  render() {
    const { question, preview } = this.props

    const { content } = question

    return (
      <div className="question-container">
        This is a Question?
        {!preview && (
          <div>
            Would You Rather
            <button>{content.A}</button>
            <button>{content.B}</button>
          </div>
        ) }
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }, {id}) {
  const question = questions[id]

  return {
    question: question ?
    formatQuestion(question, users[question.author], authedUser )
    : null
  }
}

export default connect(mapStateToProps)(Question)
