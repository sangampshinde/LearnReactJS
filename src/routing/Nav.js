import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to='/about'>About Page</Link>
        <Link to='/'>Home Page</Link><br/>
    </div>
  )
}

export default Nav;
