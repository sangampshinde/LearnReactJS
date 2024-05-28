// send data to parent 
import React from 'react';

function User3(props) {
  let data = 'anil sidhu';

  return (
    <div>
      <h2>User3 Component</h2>
      <p></p>
      <button onClick={() => {props.alert(data)}}>Click Me</button>
    </div>
  );
}

export default User3;


// -----------------------------------

// recive data from parent

// import React from 'react'

// function User3(props) {
//   return (
//     <div>
//         <h2>User3 Component</h2>
//         <p>{props.name}</p>
//         <button>Click Me</button>
      
//     </div>
//   )
// }

// export default User3
