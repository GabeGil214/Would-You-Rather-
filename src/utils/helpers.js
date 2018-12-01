export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser) {
  const { id, likes, votes, content, timestamp } = question
  const { name, avatarURL } = author
  let totalVotes = votes.A.concat(votes.B)

  return {
    name,
    id,
    timestamp,
    content,
    avatar: avatarURL,
    likes: likes.length,
    votes: {
      A: votes.A.length,
      B: votes.B.length,
      totalVotes: totalVotes.length
    },
    hasLiked: likes.includes(authedUser),
    hasVoted: totalVotes.includes(authedUser)
  }
}

export function formatUser (user, authedUser) {
  const { name, avatar, voteCount, questions } = user

  return {
    name,
    avatar,
    votes: voteCount.length,
    questions: questions.length,
    currentUser: (user === authedUser)
  }
}
