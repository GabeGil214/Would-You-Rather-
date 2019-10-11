import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

class Home extends Component {
  state = {
    answered: false
  }

  toggleState = () => {
    if (this.state.answered === false){
      this.setState({
        answered: true
      })
    } else {
      this.setState({
        answered: false
      })
    }
  }

  render() {
    const { answered } = this.state

    return (
      <div>
        <Container maxWidth="sm">
          <div className="questionToggle">
            {!answered
              ? <Button
                onClick={this.toggleState}
                >View Answered Questions</Button>
              : <Button
                onClick={this.toggleState}
                >View Unanswered Questions</Button>
            }
          </div>
          {answered
          ? this.props.answeredIds.map((id) => (
            <Question
              key={id}
              id={id}
              preview={true}
              />
          ))
          : this.props.unansweredIds.map((id) => (
            <Question
              key={id}
              id={id}
              preview={true}
              />
          ))}
        </Container>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const unansweredIds = questionIds.filter(function(id){
    const question = questions[id]

    const formattedQuestion = formatQuestion(question, users[question.author], authedUser)
    return formattedQuestion.hasVoted === false
  })

  const answeredIds = questionIds.filter(function(id){
    const question = questions[id]

    const formattedQuestion = formatQuestion(question, users[question.author], authedUser)
    return formattedQuestion.hasVoted === true
  })

  return {
    unansweredIds,
    answeredIds,
  }
}

export default connect(mapStateToProps)(Home)
