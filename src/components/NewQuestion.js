import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    textA: '',
    textB: '',
    toHome: false
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
      textB: '',
      toHome: true
    })
  }
  render(){
    const { textA, textB, toHome }  = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <div className="new-question-container">
          <div className="new-question-title">
            <h2>Would You Rather...</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className='new-question'>
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
              <p><strong>Or...</strong></p>
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
            </div>
            <button
              className="btn"
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
