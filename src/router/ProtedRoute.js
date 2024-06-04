import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

function ProtedRoute(props) {
  const {Component}=props
  const Navigate = useNavigate();
  useEffect(()=>{
    let login = localStorage.getItem('login');
    if(!login){

      Navigate('/login');

    }
  })
  return (
    <div> 
      <Component></Component>
    </div>
  )
}

export default ProtedRoute;
