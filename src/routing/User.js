import React from 'react'
import { useParams } from "react-router";

function User(props) {
    const  param = useParams();

    console.log(param);
  

  return (
    <div>
      <h1>User Component</h1>
    </div>
  )
}

export default User