import React from 'react'
import { Link } from 'react-router-dom'



function LinkTo({there, style}) {

  const isTargetBlank = there.target === true ? "_blank" : null;
  const isRelNooper = there.rel === true ? "noopener noreferrer" : null;
  

  return (
    <Link to={there.to} target={isTargetBlank} rel={isRelNooper}  style={{...style}}>
      {there.name}
    </Link>
  )
}

export default LinkTo
