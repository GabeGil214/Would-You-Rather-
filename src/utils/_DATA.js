let questions = {
  1: {
    id: 1,
    content: {
      A: "be President?",
      B: "be a Celebrity?"
    },
    author: "gabe_gil",
    timestamp: 1518043995650,
    votes: {
      A: ['barack_obama', 'kendrick_lamar', 'leslie_jones'],
      B: ['mark_hamill', 'john_mayer']
    },
    likes: ['barack_obama','kendrick_lamar']
  },
  2: {
    id: 2,
    content: {
      A: "fight 10 horse-sized ducks?",
      B: "fight 100 duck-sized horses?"
    },
    author: "barack_obama",
    timestamp: 1518122597860,
    votes: {
      A: ['john_mayer'],
      B: ['barack_obama', 'leslie_jones', 'mark_hamill']
    },
    likes: ['kendrick_lamar']
  }
}

let users = {
  gabe_gil: {
      id: "gabe_gil",
      name: "Gabe Gil",
      avatarURL: "",
      questions: [1],
      voteCount: []
    },
  barack_obama: {
    id: "barack_obama",
    name: "Barack Obama",
    avatarURL: "",
    questions: [2],
    voteCount: [1,2]
  },
  kendrick_lamar: {
    id: "kendrick_lamar",
    name: "Kendrick Lamar",
    avatarURL: "",
    questions: [],
    voteCount: [1,2]
  }
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatQuestion ({ author, contentA, contentB }) {
  return {
    author,
    id: generateUID(),
    likes: [],
    votes: {
      A: [],
      B: []
    },
    content: {
      A: contentA,
      B: contentB
    },
    timestamp: Date.now(),
  }
}

export function _saveQuestion ({ author, contentA, contentB }) {
  return new Promise((res, rej) => {
    const formattedQuestion = formatQuestion({
      author,
      contentA,
      contentB
    })

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      }

      users = {
        ...users,
        [author]: {
          ...users[author],
          questions: users[author].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      questions = {
        ...questions,
        [id]: {
          ...questions[id],
          likes: hasLiked === true
            ? questions[id].likes.filter((uid) => uid !== authedUser)
            : questions[id].likes.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
}

export function _saveVoteToggle ({ id, hasVoted, authedUser, vote }) {
  return new Promise((res, rej) => {

    const questionID =
    setTimeout(() => {
      questions = {
        ...questions,
        [id]: {
          ...questions[id],
          votes: {
            ...questions[id].votes,
            [vote]: hasVoted === true
              ? questions[id].votes[vote].filter((uid) => uid !== authedUser)
              : questions[id].votes[vote].concat([authedUser])
          }
        }
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          voteCount: hasVoted === true
            ? users[authedUser].voteCount.filter((qid) => qid !== id)
            : users[authedUser].voteCount.concat([id])
        }
      }
    })
  })
}

export function _saveUser (user) {
  return new Promise((res, rej) => {
    const formattedUser = formatUser(user)

    setTimeout(() => {
      users = {
        ...users,
        [formattedUser.id]: formattedUser,
      }
      res(formattedUser)
    }, 1000)
  })
}

function formatUser (profile) {
  return {
    id: profile.givenName.toLowerCase() + "_" + profile.familyName.toLowerCase(),
    name: profile.name,
    avatarURL: profile.imageURL,
    questions: [],
    voteCount: []
  }
}
