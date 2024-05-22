import React, { useState } from "react";

function Profile() {

  const [loggedIn, setLoggedIn] = useState(false); 

  return (
          <div>
           {loggedIn ? <h1>Profile Anil</h1>: <h1>Profile sangam</h1>}
          </div>
        );
}

export default Profile;



// this method is not recommended to use
// import React, { useState } from "react";

// function Profile() {
//   const [loggedIn, setLoggedIn] = useState(true);

//   if (loggedIn) {
//     return (
//       <div>
//         <h1>Profile Anil</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Profile sangam</h1>
//       </div>
//     );
//   }

  
// }

// export default Profile;
