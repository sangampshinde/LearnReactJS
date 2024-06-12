import React,{useEffect,useRef} from 'react'


function User5(props) {
const lastVal =useRef();
useEffect(()=>{
   lastVal.current = props.count;
})

const previousval=lastVal.current;

  return (
    <div>
        <h3>Child USER Component</h3>
        <p>Current Val:{props.count}</p>
        <p>last Val: {previousval}</p>
      
    </div>
  )
}

export default User5
