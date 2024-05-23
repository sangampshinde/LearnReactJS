import React,{useState} from 'react'

function Login() {
    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');
    const[userErr,setUserErr]=useState(false);
    const[passwordErr,setPasswordErr]=useState(false);

    function loginHandaler(e){
     e.preventDefault()
    }


    function userHandler(e){

        let item =e.target.value;

         if(item.length<3){
            setUserErr(true);
         }
         else{
            setUserErr(false);
         }
    }


    function passwordHandler(e){

        let item =e.target.value;

         if(item.length<3){
            setPasswordErr(true);
         }
         else{
            setPasswordErr(false);
         }
         
    }





  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={loginHandaler}>
        <input type='text' placeholder='userId' onChange={userHandler}></input> 
        { userErr? <span>User not Valid</span>:null}
        <br/><br/>
        <input type='password' placeholder='userPassword' ></input>
        { userErr? <span>password not Valid</span>:null}
        <br/><br/>
        <button type='submit'>Login</button>
        </form>
    </div>
  )  
}

export default Login
