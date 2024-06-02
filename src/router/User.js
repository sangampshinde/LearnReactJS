
import React from 'react'
import { useParams } from 'react-router'

function User() {

  const params = useParams();
  const {name} = params;
  console.log(name); //peter
  return (
    <div>
    
        <p>this is {name} page</p>
      
    </div>
  )
}

export default User
// --------------------------------------------

// --------------------------------
// import React from 'react'

// function User() {
//   return (
//     <div>
//         <h2>This is user page</h2>
//         <p>this is anils page</p>
      
//     </div>
//   )
// }

// export default User
