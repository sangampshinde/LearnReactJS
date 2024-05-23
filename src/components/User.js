import React from 'react'

function User(props) {
  return (
    <div>
        <h2>User Component</h2>
        {/* method 1 */}
        <button onClick={()=>{props.data()}}>Call Data Function1</button>
        {/* method 2 */}
        <button onClick={props.data}>Call Data Function 2</button>
    </div>
  )
}

export default User
