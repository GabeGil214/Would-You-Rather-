import React from 'react'

function NoMatch({ location }){
  return (
    <h2>No url match for {location.pathname}</h2>
  )
}

export default NoMatch
