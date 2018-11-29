import React, { Component } from 'react'
import { formatQuestion } from '../utils/helpers'
import { connect } from 'react-redux'
import { handleToggleQuestion, handleUserVote } from '../actions/questions'

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

  handleVote = (e) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props

    dispatch(handleUserVote({
      id: question.id,
      vote: e.target.value,
      authedUser,
      hasVoted: question.hasVoted
    }))
  }

  render() {
    const { question, preview } = this.props

    const { content, likes, votes } = question

    return (
      <div className="question-container">
        This is a Question?
        {!preview && (
          <div>
            Would You Rather
            <button
              onClick={this.handleVote}
              value="A">
              {content.A}
            </button>
            <span>{votes.A}</span>
            <button
              onClick={this.handleVote}
              value="B">
              {content.B}
            </button>
            <span>{votes.B}</span>
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
    authedUser,
    question: question ?
    formatQuestion(question, users[question.author], authedUser )
    : null
  }
}

export default connect(mapStateToProps)(Question)
