import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'


//This is a container component
class QuestionPage extends Component {

  render() {
    const { id, questionIds } = this.props

    if(!questionIds.includes(id)){
      return (
        <div>
          <h2>The question you are looking for has been removed or does not exist. Please try again.</h2>
        </div>
      )
    }

    return (
      <div>
        <Question key={id} id={id} preview={false}/>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  return {
    id,
    questionIds,
  }
}

export default connect(mapStateToProps)(QuestionPage)
