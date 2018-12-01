export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_POST = 'USER_POST'
export const USER_VOTE = 'USER_VOTE'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function userVote(user, questionID){
  return {
    type: USER_VOTE,
    user,
    questionID
  }
}

export function userPost(user, questionID){
  return {
    type: USER_POST,
    user,
    questionID
  }
}
