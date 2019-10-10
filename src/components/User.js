import React from 'react'
import { formatUser } from '../utils/helpers'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import useStyles from '../styles'



 function User(props) {
     const { user } = props
     const { name, avatarURL, votes, questions, currentUser } = user
     const classes = useStyles();

     let containerClass = "profile-container"
     if(currentUser){
       containerClass += " currentUser"
     }

     return (
       <Card className={containerClass}>
         <div className={classes.center}>
           <div className="user-image">
             <img src={avatarURL} height="50" width="50"/>
           </div>
           <p>{name}</p>
         </div>
         <CardContent className={classes.spaceBetween}>
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
         </CardContent>
       </Card>
     )
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
