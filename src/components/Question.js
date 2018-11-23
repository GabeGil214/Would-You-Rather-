import React, { Component } from 'react'
import { formatQuestion } from '../utils/helpers'
import { connect } from 'react-redux'
import { handleToggleQuestion } from '../actions/questions'

class Question extends Component {
  handleLike = (e) => {
    e.preventDefault()

    const { dispatch, users, question, authedUser } = this.props

    dispatch(handleToggleQuestion({
      id: question.id,
      hasLiked: question.hasLiked,
      authedUser
    }))
  }

  render() {
    const { question, preview } = this.props

    const { content, likes } = question

    return (
      <div className="question-container">
        This is a Question?
        {!preview && (
          <div>
            Would You Rather
            <button>{content.A}</button>
            <button>{content.B}</button>
            <p>Likes: {likes}</p>
            <button className="like-btn" onClick={this.handleLike}>Like</button>
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
