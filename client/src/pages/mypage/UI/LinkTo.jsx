import React from 'react'
import { Link } from 'react-router-dom'

function LinkTo({there}) {
  return (
    <Link to={there.to} style={{textDecoration:"none"}}>
      {there.name}
    </Link>
  )
}

export default LinkTo
