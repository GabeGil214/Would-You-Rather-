import React, { Component } from 'react'
import { formatUser } from '../utils/helpers'
import { connect } from 'react-redux'



 class User extends Component {
   render() {
     const { user, authedUser, id } = this.props
     const { name, avatar, votes, questions, currentUser } = user

     return (
       <div>
         <div>
           <img src={avatar} />
           <p>{user.name}</p>
         </div>
         <div>
           <p>Score:</p>
           <p>{votes}</p>
           <p>{questions}</p>
         </div>
       </div>
     )
   }
 }

 function mapStateToProps ({ users, authedUser }, {id}) {
   const user = users[id]

   return {
     authedUser,
     user: user ?
     formatUser(user, authedUser)
     : null
   }
 }

 export default connect(mapStateToProps)(User)
