export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_POST = 'USER_POST'
export const USER_VOTE = 'USER_VOTE'
export const ADD_USER = 'ADD_USER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function userVote(user, id){
  return {
    type: USER_VOTE,
    user,
    id,
  }
}

export function addUser(user){
  return {
    type: ADD_USER,
    user,
  }
}

export function userPost(user, questionID){
  return {
    type: USER_POST,
    user,
    questionID
  }
}
