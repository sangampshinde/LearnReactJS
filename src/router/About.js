// uselocation

import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
        <h2>About Component</h2>
        <p>this my About page </p>
        <Link to='/'>Go to Home page</Link>
        <li><Link to='/user/anil' state={{name:'anil sidhu',age:20}}>Anil</Link></li> 
        <li><Link to='/user/peter'>Peter</Link></li>
    </div>
  )
}

export default About
// ===================================================================
// import React from 'react'
// import { Link } from 'react-router-dom'


// function About() {
//   return (
//     <div>
//         <h2>About Component</h2>
//         <p>this my About page </p>
//         <Link to='/'>Go to Home page</Link>
//         <li><Link to='/user/anil'>Anil</Link></li> 
//         <li><Link to='/user/peter'>Peter</Link></li>
//     </div>
//   )
// }

// export default About
// ---------------------------------------------
// import React from 'react'
// import { Link } from 'react-router-dom'


// function About() {
//   return (
//     <div>
//         <h2>About Component</h2>
//         <p>this my About page </p>
//         <Link to='/'>Go to Home page</Link>
      
//     </div>
//   )
// }

// export default About
