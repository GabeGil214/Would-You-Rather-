import React, { Component } from 'react'
import User from './User'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import useStyles from '../styles'

function Leaderboard(props) {
     const { sortedUsers } = props;
     const classes = useStyles();

     return (
       <Container maxWidth="sm">
         {sortedUsers.map((id) => (
           <div key={id}>
             <User id={id} />
           </div>
         ))}
       </Container>
     )
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
