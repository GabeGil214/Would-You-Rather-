import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import useStyles from '../styles';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

function NewQuestion(props) {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [toHome, setToHome] = useState(false);
  const classes = useStyles();

  function handleChange(e) {
    const name = e.target.name
    const text = e.target.value
    if(name === 'textA'){
      setTextA(text)
    } else {
      setTextB(text)
    }

  }

  function handleSubmit(e) {
    e.preventDefault()
    const { dispatch, id } = props

    //todo: add question to createStore
    dispatch(handleAddQuestion(textA, textB, id))

    setTextA('');
    setTextB('');
    setToHome(true);
  }

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <Container maxWidth="sm">
        <Card>
          <div className={classes.center}>
            <h2>Would You Rather...</h2>
          </div>
          <form
            onSubmit={handleSubmit}
            >
            <div className={classes.newQuestions}>
              <div className={classes.newQuestion}>
                <textarea
                  name="textA"
                  placeholder="..win $5 million now?"
                  value={textA}
                  onChange={handleChange}
                  className='textarea'
                  maxLength={180}>
                </textarea>
              </div>
              <p><strong>Or...</strong></p>
              <div className={classes.newQuestion}>
                <textarea
                  name="textB"
                  placeholder="...$10,000 every week for life?"
                  value={textB}
                  onChange={handleChange}
                  className='textarea'
                  maxLength={180}>
                </textarea>
              </div>
            </div>
            <div className={classes.likeButton}>
              <Button
                type="submit"
                >
                Add Question
              </Button>
            </div>
          </form>
        </Card>
      </Container>
    )
}

export default connect()(NewQuestion)
