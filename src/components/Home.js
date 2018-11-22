import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.questionIds.map((id) => (
            <Question key={id} id={id}/>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
