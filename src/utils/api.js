import {
  _getUsers,
  _getQuestions,
  _saveLikeToggle,
  _saveQuestion,
  _saveUser,
  _saveVoteToggle
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveLikeToggle (info) {
  return _saveLikeToggle(info)
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveVoteToggle (info) {
  return _saveVoteToggle(info)
}

export function saveUser (user) {
  return _saveUser(user)
}
