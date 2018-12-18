import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'


//This is a container component
class QuestionPage extends Component {

  render() {
    const { id } = this.props

    return (
      <div>
        <Question key={id} id={id} preview={false}/>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params

  return {
    id,
  }
}

export default connect(mapStateToProps)(QuestionPage)
