import React from 'react'

function user({user}) {
  return (
    <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    </>
  )
}

export default user;