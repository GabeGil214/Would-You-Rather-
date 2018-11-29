import { saveLikeToggle, saveQuestion, saveVoteToggle } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOGGLE_QUESTION = 'TOGGLE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const VOTE_QUESTION = 'VOTE_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function toggleQuestion ({id, authedUser, hasLiked}) {
  return {
    type: TOGGLE_QUESTION,
    id,
    authedUser,
    hasLiked,
  }
}

export function handleToggleQuestion (info) {
  return (dispatch) => {
    dispatch(toggleQuestion(info))

    return saveLikeToggle(info)
      .catch((e) => {
        console.warn('Error in handleToggleQuestion: ', e)
        dispatch(toggleQuestion(info))
        alert('There was an error liking the question.')
      })
  }
}

function addQuestion (question){
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (contentA, contentB) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      contentA,
      contentB
    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))
  }
}

function voteQuestion ({id, vote, authedUser, hasVoted}) {
  return {
    type: VOTE_QUESTION,
    id,
    vote,
    authedUser,
    hasVoted,
  }
}

export function handleUserVote (info) {
  return (dispatch) => {
    dispatch(voteQuestion(info))

    return saveVoteToggle(info)
      .catch((e) => {
        console.warn('Error in handleToggleQuestion: ', e)
        dispatch(toggleQuestion(info))
        alert('There was an error liking the question.')
      })
  }
}
