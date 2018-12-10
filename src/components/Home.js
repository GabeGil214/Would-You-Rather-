import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

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
        <div className="questionToggle">
          {!answered
            ? <button className="btn"
              onClick={this.toggleState}
              >View Answered Questions</button>
            : <button className="btn"
              onClick={this.toggleState}
              >View Unanswered Questions</button>
          }
        </div>
        <div className="questions-container">
          {!answered
          ? this.props.answeredIds.map((id) => (
            <Question key={id} id={id}/>
          ))
          : this.props.unansweredIds.map((id) => (
            <Question key={id} id={id}/>
          ))}
      </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  console.log(questions)
  const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const unansweredIds = questionIds.filter((id) => questions[id].hasVoted === true)
  const answeredIds = questionIds.filter((id) => questions[id].hasVoted !== true)

  return {
    unansweredIds,
    answeredIds,
  }
}

export default connect(mapStateToProps)(Home)
