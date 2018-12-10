import React, { Component } from 'react'
import User from './User'
import { connect } from 'react-redux'

class Leaderboard extends Component {
   render() {
     const { sortedUsers } = this.props
     return (
       <div>
         {sortedUsers.map((id) => (
           <div key={id}>
             <User id={id} />
           </div>
         ))}
       </div>
     )
   }
 }

 function mapStateToProps ({ users }) {
  return {
    sortedUsers: Object.keys(users)
      .sort((a,b) => {
        let aScore = users[a].voteCount.length + users[a].questions.length
        let bScore = users[b].voteCount.length + users[b].questions.length

        return bScore-aScore
      })
  }
}

export default connect(mapStateToProps)(Leaderboard)
