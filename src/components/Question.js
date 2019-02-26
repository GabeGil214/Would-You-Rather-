import React, { Component, Fragment } from 'react'
import { formatQuestion } from '../utils/helpers'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
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
        <Card>
          <CardContent className="question-container">
            {!preview
              ? <Fragment>
              <CardHeader
                title="Would You Rather..."/>
              <Typography variant="subtitle1">Submitted By:</Typography>
              <img src={avatar} height='50' width='50' alt={name}/>
              <div className="answer-window">
                <div className="answer-container answerA">
                  <Typography variant="subtitle1">{votes.A}</Typography>
                  {response === 'A'
                    ? <Fragment>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={this.handleVote}
                      value="A">
                      <span>{content.A}</span>
                    </Button>
                    <h4>Your answer</h4>
                    <h5>{Math.floor((votes.A/votes.totalVotes) * 100)}% of Users chose this answer</h5>
                  </Fragment>
                  : <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleVote}
                  value="A">
                  <span>{content.A}</span>
                </Button>
                }
                </div>
                <div className="answer-container answerB">
                  <Typography variant="subtitle1">{votes.B}</Typography>
                  {response === 'B'
                    ? <Fragment>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={this.handleVote}
                      value="B">
                      <span>{content.B}</span>
                    </Button>
                    <h4>Your answer</h4>
                    <h5>{Math.floor((votes.B/votes.totalVotes) * 100)}% of Users chose this answer</h5>
                  </Fragment>
                : <Button
                variant="contained"
                color="primary"
                onClick={this.handleVote}
                value="B">
                <span>{content.B}</span>
                </Button>
                }
              </div>
            </div>
            <Typography variant="subtitle2">Likes: {likes}</Typography>
            <Button variant ="contained" color="primary" className="btn" onClick={this.handleLike}>Like</Button>
          </Fragment>
          : <Link to={`/question/${id}`}>
              <div>
                <Typography variant="h2">Would You Rather {content.A} <span>OR</span> {content.B}</Typography>
                <Typography variant="subtitle1">Total Votes: {votes.totalVotes}</Typography>
              </div>
            </Link>
          }
        </CardContent>
        </Card>
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
