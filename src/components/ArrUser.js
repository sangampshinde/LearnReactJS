import React from 'react'

function ArrUser(props) {
  return (
    // User Component
    <div>
        
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <span>{props.data.contact}</span>
      
    </div>
  )
}

export default ArrUser
