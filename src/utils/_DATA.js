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
      total: 5,
      A: 3,
      B: 2
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
      total: 4,
      A: 1,
      B: 3
    },
    likes: ['kendrick_lamar']
  }
}

let users = {
  gabe_gil: {
      id: "gabe_gil",
      name: "Gabe Gil",
      avatarURL: "",
      questions: []
    },
  barack_obama: {
    id: "barack_obama",
    name: "Barack Obama",
    avatarURL: "",
    questions: []
  },
  kendrick_lamar: {
    id: "kendrick_lamar",
    name: "Kendrick Lamar"",
    avatarURL: "",
    questions: []
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
      total: 0,
      A: 0,
      B: 0
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
