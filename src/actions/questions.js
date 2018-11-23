import { saveLikeToggle } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOGGLE_QUESTION = 'TOGGLE_QUESTION'

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
