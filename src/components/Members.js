import React from 'react'

function Members(props) {
  return (
    <div>
      <h1>Memebers Component</h1>
       {/* method 1 */}
       <button onClick={()=>{props.data()}}>Call Data Function1</button>
        {/* method 2 */}
        <button onClick={props.data}>Call Data Function 2</button>
    </div>
  )
}

export default Members
