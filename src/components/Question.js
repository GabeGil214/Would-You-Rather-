import React, { Component } from 'react'

class Question extends Component {

  render() {
    const { preview } = this.props

    return (
      <div className="question-container">
        This is a Question?
        {!preview && (
          <div>
            This is a full question.
            <button>Option A</button>
            <button>Option B</button>
          </div>
        ) }
      </div>
    )
  }
}

export default Question
