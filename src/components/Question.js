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
        {!preview && (
          <div>
            <h2>Would You Rather...</h2>
            <div className="answer-window">
              <div className="answer-container answerA">
                <p>{votes.A}</p>
                <button
                  onClick={this.handleVote}
                  value="A">
                  {content.A}
                </button>
              </div>
              <div className="answer-container answerB">
                <p>{votes.B}</p>
                <button
                  onClick={this.handleVote}
                  value="B">
                  {content.B}
                </button>
              </div>
            </div>
            <p>Likes: {likes}</p>
            <button className="btn" onClick={this.handleLike}>Like</button>
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
