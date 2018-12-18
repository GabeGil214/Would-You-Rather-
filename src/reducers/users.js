import { USER_VOTE, USER_POST, RECEIVE_USERS, ADD_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case USER_VOTE :
      return {
        ...state,
        [action.user.id]: {
          ...action.user,
          voteCount: action.user.voteCount.includes(action.questionID)
            ? action.user.voteCount.filter((id) => id !== action.questionID)
            : action.user.voteCount.concat(action.questionID)
        }
      }
    case USER_POST :
      return {
        ...state,
        [action.user.id]: {
          ...action.user,
          questions: action.user.questions.concat(action.questionID)
        }
      }
    case ADD_USER :
      return {
        ...state,
        [action.user.id]: action.user
      }
    default:
      return state
    }
}
