import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
        <h2>About Component</h2>
        <p>this my About page </p>
        <Link to='/'>Go to Home page</Link>
      
    </div>
  )
}

export default About
