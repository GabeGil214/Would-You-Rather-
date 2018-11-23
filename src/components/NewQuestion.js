import React, { Component } from 'react'

class NewQuestion extends Component {
  state = {
    text: '',
  }
  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state

    //todo: add question to createStore

    this.setState({
      text: '',
    })
  }
  render(){
    return (
      <div>
        <h3>New question</h3>
        <div className="new-question-container">
          <div className="new-question-title">
            <h2>Would You Rather...</h2>
          </div>
          <form>
            <div>
              <h4>Option A:</h4>
              <textarea>
              </textarea>
            </div>
            <div>
              <h4>Option B:</h4>
              <textarea>
              </textarea>
            </div>
            <button type="submit">Add Question</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewQuestion
