import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../router/Routes';





function LinkTo({there, style}) {
  const OPEN_NEWTAB = [
    ROUTES.REGISTER.path,
  
  ]

  const isNewTab = OPEN_NEWTAB.includes(there.to);
  const isTargetBlank = isNewTab ? "_blank" : null;
  const isRelNooper = isNewTab ? "noopener noreferrer" : null;
  

  return (
    <Link to={there.to} target={isTargetBlank} rel={isRelNooper}  style={{...style}}>
      {there.name}
    </Link>
  )
}

export default LinkTo
