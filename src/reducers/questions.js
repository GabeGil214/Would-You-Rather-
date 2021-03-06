import { RECEIVE_QUESTIONS, TOGGLE_QUESTION, ADD_QUESTION, VOTE_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case TOGGLE_QUESTION :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked === true
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat([action.authedUser])
        }
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case VOTE_QUESTION :
      console.log(state[action.id])
      console.log(action.vote)
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          votes: {
            ...state[action.id].votes,
            [action.vote]: action.hasVoted === true
            ? state[action.id].votes[action.vote].filter((uid) => uid !== action.authedUser)
            : state[action.id].votes[action.vote].concat([action.authedUser])
          }
        }
      }
    default:
      return state
  }
}
