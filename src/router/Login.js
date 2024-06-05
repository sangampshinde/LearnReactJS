import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function Login() {
  const Navigate = useNavigate();

const login =()=>{
  localStorage.setItem('login',true)
  Navigate('/');
}

useEffect(()=>{
  let login = localStorage.getItem('login');
  if(login){

    Navigate('/');

  }
})


  return (
    <div>
        <h1>Login Page</h1>
        <input type='text'/><br/>
        <input type='text'/><br/>
        <button onClick={login}>Login</button>

      
    </div>
  )
}

export default Login
