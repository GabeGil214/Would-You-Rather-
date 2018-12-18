import React, { Component, Fragment } from 'react'
import { formatQuestion } from '../utils/helpers'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleToggleQuestion, handleUserVote } from '../actions/questions'

class Question extends Component {
  handleLike = (e) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props

    dispatch(handleToggleQuestion({
      id: question.id,
      hasLiked: question.hasLiked,
      authedUser
    }))
  }

  handleVote = (e) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props
    console.log(question)

    dispatch(handleUserVote({
      id: question.id,
      vote: e.currentTarget.value,
      authedUser,
      hasVoted: question.hasVoted
    }))
  }

  render() {
    const { question, preview } = this.props

    const { content, likes, votes, id, response, avatar, name } = question

    return (
      <Link to={`/question/${id}`}>
        <div className="question-container">
          {!preview
            ? <div>
                <h2>Would You Rather...</h2>
                <p>Submitted By:</p>
                <img src={avatar} height='50' width='50' alt={name}/>
                <div className="answer-window">
                  <div className="answer-container answerA">
                    <p>{votes.A}</p>
                    {response === 'A'
                    ? <Fragment>
                        <button
                          className="user-answer"
                          onClick={this.handleVote}
                          value="A">
                          <span>{content.A}</span>
                        </button>
                        <h4>Your answer</h4>
                        <h5>{Math.floor((votes.A/votes.totalVotes) * 100)}% of Users chose this answer</h5>
                      </Fragment>
                    : <button
                        onClick={this.handleVote}
                        value="A">
                        <span>{content.A}</span>
                      </button>
                    }
                  </div>
                  <div className="answer-container answerB">
                    <p>{votes.B}</p>
                      {response === 'B'
                      ? <Fragment>
                          <button
                            className="user-answer"
                            onClick={this.handleVote}
                            value="B">
                            <span>{content.B}</span>
                          </button>
                          <h4>Your answer</h4>
                          <h5>{Math.floor((votes.B/votes.totalVotes) * 100)}% of Users chose this answer</h5>
                        </Fragment>
                      : <button
                          onClick={this.handleVote}
                          value="B">
                          <span>{content.B}</span>
                        </button>
                      }
                  </div>
                </div>
                <p>Likes: {likes}</p>
                <button className="btn" onClick={this.handleLike}>Like</button>
              </div>
            : <div>
                <h2>Would You Rather {content.A} <span>OR</span> {content.B}</h2>
                <p>Total Votes: {votes.totalVotes}</p>
              </div>
            }
        </div>
      </Link>
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
