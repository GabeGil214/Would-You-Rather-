import React, { Component } from 'react'
import { formatUser } from '../utils/helpers'
import { connect } from 'react-redux'



 class User extends Component {
   render() {
     const { user } = this.props
     const { name, avatarURL, votes, questions, currentUser } = user

     let containerClass = "profile-container"
     if(currentUser){
       containerClass += " currentUser"
     }

     return (
       <div className={containerClass}>
         <div className="user-info-container">
           <div className="user-image">
             <img src={avatarURL} height="50" width="50"/>
           </div>
           <p>{name}</p>
         </div>
         <div className="scores-container">
           <div>
             <p><strong>Votes</strong></p>
             <p>{votes}</p>
           </div>
           <div>
             <p><strong>Questions posted</strong></p>
             <p>{questions}</p>
           </div>
           <div>
             <p><strong>Total</strong></p>
             <p>{questions + votes}</p>
           </div>
         </div>
       </div>
     )
   }
 }

 function mapStateToProps ({ users, authedUser }, {id}) {
   const user = users[id]
   console.log(user)

   return {
     authedUser,
     user: user ?
     formatUser(user, authedUser)
     : null
   }
 }

 export default connect(mapStateToProps)(User)
