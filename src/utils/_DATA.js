let questions = {
  1: {
    id: 1,
    content: {
      A: "be President?",
      B: "be a Celebrity?"
    },
    author: "james_franco",
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
  james_franco: {
      id: "james_franco",
      name: "James Franco",
      avatarURL: "https://m.media-amazon.com/images/M/MV5BMjA4MzMzNDM5MF5BMl5BanBnXkFtZTgwMjQ0MDk0NDM@._V1_.jpg",
      questions: [1],
      voteCount: []
    },
  barack_obama: {
    id: "barack_obama",
    name: "Barack Obama",
    avatarURL: "https://images-na.ssl-images-amazon.com/images/I/81Y3JFPfpQL._SY450_.jpg",
    questions: [2],
    voteCount: [1,2]
  },
  kendrick_lamar: {
    id: "kendrick_lamar",
    name: "Kendrick Lamar",
    avatarURL: "https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg",
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
  console.log(id)
  return new Promise((res, rej) => {

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
    }, 500)
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
    avatarURL: profile.imageUrl,
    questions: [],
    voteCount: []
  }
}
