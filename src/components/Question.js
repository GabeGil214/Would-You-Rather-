import React, { Component } from 'react'

class Question extends Component {
  state = {
    preview: true
  }

  render() {
    const { preview } = this.state

    return (
      <div>
        This is a Question?
        {!preview && (
          <div>
            This is a full question.
          </div>
        ) }
      </div>
    )
  }
}

export default Question
