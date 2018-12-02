import { getInitialData } from '../utils/api'
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
        dispatch(setAuthedUser())
        dispatch(hideLoading())
      })
  }
}

export function handleUserLogin (googleProfile, users) {
  return (dispatch) => {
    const usersID = Object.keys(users)
      .sort((a,b) => users[b] - users[a])



    if(usersID.includes(googleProfile.id)){
      return dispatch(setAuthedUser(id))

    } else {
      dispatch(setAuthedUser(id))

      return newUser()
        .then((user) => {
          dispatch(addUser(user))
        })
    }
  }
}
