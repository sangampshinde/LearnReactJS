import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            {/* <li><Link to='/user'>User</Link></li> */}
            <li><Link to='/user/anil'>Anil</Link></li>
            <li><Link to='/user/peter'>Peter</Link></li>
        </ul>
      
     
      
    </div>
  )
}

export default NavBar

// -------------------------------------
// import React from 'react'
// import { Link } from 'react-router-dom'

// function NavBar() {
//   return (
//     <div>
//       <Link to='/about'>About</Link>
//       <br/>
//       <Link to='/'>Home</Link>
//     </div>
//   )
// }

// export default NavBar