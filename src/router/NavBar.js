import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul className='navbar'>
            <li><NavLink className='nav-bar-Link' to='/'>Home</NavLink></li>
            <li><NavLink className='nav-bar-Link' to='/about'>About</NavLink></li>
            <li><NavLink className='nav-bar-Link' to='/contact'>Contact</NavLink></li>
            <li><NavLink className='nav-bar-Link' to='/filter'>Filter</NavLink></li>
            <li><NavLink className='nav-bar-Link' to='/login'>Login</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar
// ------------------------------------------------------------------------------------------------
// link active
// import React from 'react'
// import {NavLink} from 'react-router-dom'

// function NavBar() {
//   return (
//     <div>
//         <ul className='navbar'>
//             <li><NavLink 
//             style={({isActive})=>{return {backgroundColor:isActive?'yellow':'red'}}}
//                to='/'>Home</NavLink></li>
//             <li><NavLink
//             style={({isActive})=>{return {backgroundColor:isActive?'yellow':'red'}}}
//               to='/about'>About</NavLink></li>
//             <li><NavLink  
//             style={({isActive})=>{return {backgroundColor:isActive?'yellow':'red'}}}
//             to='/contact'>Contact</NavLink></li>
//         </ul>
//     </div>
//   )
// }

// export default NavBar

// method -1

// import React from 'react'
// import {NavLink} from 'react-router-dom'

// function NavBar() {
//   return (
//     <div>
//         <ul className='navbar'>
//             <li><NavLink className='nav-bar-Link'  to='/'>Home</NavLink></li>
//             <li><NavLink className='nav-bar-Link' to='/about'>About</NavLink></li>
//             <li><NavLink className='nav-bar-Link' to='/contact'>Contact</NavLink></li>
//         </ul>
//     </div>
//   )
// }

// export default NavBar
// --------------------------------------------------------------------------
// // link and nav link and style
// we canot add className to Link 
// we use  NavLink for that and use className.

// import React from 'react'
// import { Link ,NavLink} from 'react-router-dom'

// function NavBar() {
//   return (
//     <div>
//         <ul className='navbar'>
//             <li><NavLink className='nav-bar-Link' style={{backgroundColor:'yellow'}} to='/'>Home</NavLink></li>
//             <li><NavLink className='nav-bar-Link' to='/about'>About</NavLink></li>
//             <li><NavLink className='nav-bar-Link' to='/contact'>Contact</NavLink></li>
//         </ul>
//     </div>
//   )
// }

// export default NavBar
// -------------------------------------------------------------
// import React from 'react'
// import { Link } from 'react-router-dom'

// function NavBar() {
//   return (
//     <div>
//         <ul>
//             <li><Link to='/about'>About</Link></li>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/contact'>Contact</Link></li>
//             {/* <li><Link to='/user'>User</Link></li> */}
            
//         </ul>
      
//     </div>
//   )
// }

// export default NavBar
// ------------------------------------------

// import React from 'react'
// import { Link } from 'react-router-dom'

// function NavBar() {
//   return (
//     <div>
//         <ul>
//             <li><Link to='/about'>About</Link></li>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/contact'>Contact</Link></li>
//             {/* <li><Link to='/user'>User</Link></li> */}
//             <li><Link to='/user/anil'>Anil</Link></li>
//             <li><Link to='/user/peter'>Peter</Link></li>
//         </ul>
      
//     </div>
//   )
// }

// export default NavBar

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