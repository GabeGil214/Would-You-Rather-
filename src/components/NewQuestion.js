import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    textA: '',
    textB: ''
  }
  handleChange = (e) => {
    const name = e.target.name
    const text = e.target.value
    if(name === 'textA'){
      this.setState({
        textA: text
      })
    } else {
      this.setState({
        textB: text
      })
    }

  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { textA, textB } = this.state
    const { dispatch, id } = this.props

    //todo: add question to createStore
    dispatch(handleAddQuestion(textA, textB, id))

    this.setState({
      textA: '',
      textB: ''
    })

  }
  render(){
    const { textA, textB }  = this.state
    return (
      <div>
        <h3>New question</h3>
        <div className="new-question-container">
          <div className="new-question-title">
            <h2>Would You Rather...</h2>
          </div>
          <form className='new-question' onSubmit={this.handleSubmit}>
            <div>
              <textarea
                name="textA"
                placeholder="..win $5 million now?"
                value={textA}
                onChange={this.handleChange}
                className='textarea'
                maxLength={180}>
              </textarea>
            </div>
            <h4>Or..</h4>
            <div>
              <textarea
                name="textB"
                placeholder="...$10,000 every week for life?"
                value={textB}
                onChange={this.handleChange}
                className='textarea'
                maxLength={180}>
              </textarea>
            </div>
            <button
              type="submit"
              >
              Add Question
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)
