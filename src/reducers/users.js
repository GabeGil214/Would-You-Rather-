import { USER_VOTE, USER_POST, RECEIVE_USERS } from '../actions/users'

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
        [action.user]: {
          ...action.user,
          voteCount: action.user.voteCount.includes(action.questionID)
            ? action.user.voteCount.filter((id) => id !== action.questionID)
            : action.user.voteCount.concat(action.questionID)
        }
      }
    case USER_POST :
      return {
        ...state,
        [action.user]: {
          ...action.user,
          questions: action.user.questions.concat(action.questionID)
        }
      }
    default:
      return state
    }
}
