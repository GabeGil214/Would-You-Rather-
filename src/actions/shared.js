import { getInitialData, saveUser } from '../utils/api'
import { receiveUsers, addUser } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleUserLogin (googleProfile, users) {
  return (dispatch) => {
    const usersID = Object.keys(users)
      .sort((a,b) => users[b] - users[a])

    const loginID = googleProfile.givenName.toLowerCase() + "_" + googleProfile.familyName.toLowerCase()

    if(usersID.includes(loginID)){
      return dispatch(setAuthedUser(loginID))

    } else {
      dispatch(setAuthedUser(loginID))
      return saveUser(googleProfile)
        .then((user) => {
          dispatch(addUser(user))
        })
    }
  }
}
