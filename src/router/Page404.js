import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
        <h1>404 Page</h1>
        <p>This url is not present</p>
        <Link to='/'>Go to home page</Link>
      
    </div>
  )
}

export default Page404
