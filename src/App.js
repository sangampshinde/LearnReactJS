// Context API
// help to transer data from siblings or any node or component in your apllication tree.
import React from 'react'

function App() {
  return (
    <div>
      <h1>Context API</h1>
      
    </div>
  )
}

export default App

// ================================================================================================================
// // State with Object
// import React,{useState} from 'react';

// function App() {
//   const [data,setData]=useState({name:'anil',age:27});

//   return (
//     <div>
//       <h1>state with objects</h1>
//       <input type="text" placeholder='enter name' value={data.name}  onChange={(e)=>{setData({name:e.target.value,age:data.age})}}/>
//       <input type="text" placeholder='enter age' value={data.age}  onChange={(e)=>{setData({name:data.name,age:e.target.value})}}/> 
//       <p>{data.name}</p>
//       <p>{data.age}</p>
//     </div>
//   )
// }

// export default App

// ==========================================================================================================
// PREVIOUS PROPS and use with hooks.
// import React, { useState } from 'react'
// import User5 from './components/User5'



// function App() {
//   const[count,setCount] = useState(0);
//   return (
//     <div>
//       <h1> Previous Props  and how to use with Hooks </h1>
//       <User5 count={count}/>
//       <button onClick={()=>{setCount(Math.floor(Math.random()*10))}}>Update Counter</button>
//     </div>
//   )
// }

// export default App

// =============================================================================================================

// // Previous State In Functional Component
// // useStete setting varivale contain a callback function also as shown in example

// import React,{useState} from 'react'

// function App() {
//   const [count,setCount]=useState(0);

//   function upadateCounter(){
//     let rand = Math.floor(Math.random()*10)
//     setCount((preVal)=>{
//       console.log(preVal);
//       if(preVal-rand>5){
//         alert("Hi");
//       }

//       // for(let i=0;i<5;i++){
//       //   setCount((pre)=>{
//       //      return pre+100;
//       //   })
//       // }

//       return rand;
//     });

//   }

//   return (
//     <div>
//       <h1>Previous State</h1>
//       <p>{count}</p>
//       <button onClick={upadateCounter}>Upadate</button>
      
//     </div>
//   )
// }

// export default App

// -----------------------------------------------------
// import React,{useState} from 'react'

// function App() {
//   const [count,setCount]=useState(0);

//   function upadateCounter(){
//     let rand = Math.floor(Math.random()*10)
//     setCount((preVal)=>{
//       console.log(preVal);
//       return rand;
//     });

//   }

//   return (
//     <div>
//       <h1>Previous State</h1>
//       <p>{count}</p>
//       <button onClick={upadateCounter}>Upadate</button>
      
//     </div>
//   )
// }

// export default App




// ========================================================================================================
// PUT API in React
// import React, { useEffect,useState } from 'react'

// function App() {

//   const [data,setData] = useState([]);
//   const [name,setName]=useState('');
 
//   const [email,setEmail]=useState('');
//   const [mobile,setMobile]=useState('');
//   const [userId,setUserId]=useState(null)

//   useEffect(()=>{
//     getList ()
//   },[])

//   // console.log(data)

// function getList (){
//   fetch("http://localhost:2000/users").then((result)=>{
//     result.json().then((res,req)=>{
//      // console.log('result',res);
//      setData(res);
//      setName(res[0].name)
//      setEmail(res[0].email)
//      setMobile(res[0].mobile)
    
//      setUserId(res[0].id)
//     })
// })
// }


//   function deleteUser(id) {
//       // console.log(id)

//       fetch(`http://localhost:2000/users/${id}`,
//         {
//         method:'DELETE'
//         })
//         .then((result)=>{
//         result.json().then((res)=>{
//           console.log(res)
//           getList ();
//         })

//       })
      
//   }

//   function selectUser (id) {
//     // console.log(data[id-1])
//     let item = data[id-1];
//     //  setName(data[id-1].name)
//     //  setEmail(data[id-1].email)
//     //  setMobile(data[id-1].mobile)
//      setName(item.name)
//      setEmail(item.email)
//      setMobile(item.mobile)
//      setUserId(item.id)
    
//   }

//   function updateUser(){
//     // console.log(name,email,mobile,userId);

//     let item = {name,email,mobile,userId}
//     fetch(`http://localhost:2000/users/${userId}`,
//       {
//       method:'PUT',
//       headers:{
//         'Accept':'application.json',
//         'Content-Type':'application.json'
//       },
//       body:JSON.stringify(item)
      
//       })
//       .then((result)=>{
//       result.json().then((res)=>{
//         console.log(res)
//         getList ();
//       })

//     })
//   }
  
//   return(
//     <div>
//     <h1>Pre Filled Form</h1>
//     <div>
//         <input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}}></input>
//         <br></br>
//         <br></br>
//         <input type='email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
//         <br></br>
//         <br></br>
//         <input type='number'value={mobile} onChange={(e)=>{setMobile(e.target.value)}}></input>
//         <br></br>
//         <br></br>
//        <button onClick={updateUser}>Update User</button>
//        <br></br>
//         <br></br>
//        </div>

//     <table border='2px'>
//       <thead>
//       <tr>
//         <th>id</th>
//         <th>Name</th>
//         <th>Email</th>
        
//         <th>mobile</th>
//         <th>operation</th>
//       </tr>
//       </thead>
//       <tbody>
//        {
//         data.map((user,i)=>(
//       <tr key={i+1}>
//         <td>{i+1}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
        
//         <td>{user.mobile}</td>
//         <td><button onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
//         <td><button onClick={()=>{selectUser(i+1)}}>Update</button></td>

//       </tr>

//         ))
//        }
//        </tbody>
//        </table>
       
//        </div>
//   )

// }
// export default App;

// ========================================================================================================

// Pre-Filled Form
// import React, { useEffect,useState } from 'react'

// function App() {

//   const [data,setData] = useState([]);
//   const [name,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [mobile,setMobile]=useState('');


//   useEffect(()=>{
//     getList ()
//   },[])

//   // console.log(data)

// function getList (){
//   fetch("http://localhost:2000/users").then((result)=>{
//     result.json().then((res,req)=>{
//      // console.log('result',res);
//      setData(res);
//      setName(res[0].name)
//      setEmail(res[0].email)
//      setMobile(res[0].mobile)
//     })
// })
// }


//   function deleteUser(id) {
//       // console.log(id)

//       fetch(`http://localhost:2000/users/${id}`,
//         {
//         method:'DELETE'
//         })
//         .then((result)=>{
//         result.json().then((res)=>{
//           console.log(res)
//           getList ();
//         })

//       })
      
//   }

//   function selectUser (id) {
//     // console.log(data[id-1])
//     let item = data[id-1];
//     //  setName(data[id-1].name)
//     //  setEmail(data[id-1].email)
//     //  setMobile(data[id-1].mobile)
//      setName(item.name)
//      setEmail(item.email)
//      setMobile(item.mobile)


//   }
  
//   return(
//     <div>
//     <h1>Pre Filled Form</h1>
//     <div>
//         <input type='text'  value={name}></input>
//         <br></br>
//         <br></br>
//         <input type='email'  value={email}></input>
//         <br></br>
//         <br></br>
//         <input type='number'value={mobile} ></input>
//         <br></br>
//         <br></br>
//        <button type=''>Update</button>
//        <br></br>
//         <br></br>
//        </div>

//     <table border='2px'>
//       <thead>
//       <tr>
//         <th>id</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>age</th>
//         <th>mobile</th>
//         <th>operation</th>
//       </tr>
//       </thead>
//       <tbody>
//        {
//         data.map((user,i)=>(
//       <tr key={i+1}>
//         <td>{i+1}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         <td>{user.age}</td>
//         <td>{user.mobile}</td>
//         <td><button onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
//         <td><button onClick={()=>{selectUser(i+1)}}>Update</button></td>

//       </tr>

//         ))
//        }
//        </tbody>
//        </table>
       
//        </div>
//   )

// }
// export default App;
// ===========================================================================
// DELETE API in React

// import React, { useEffect,useState } from 'react'

// function App() {

//   const [data,setData] = useState([]);

//   useEffect(()=>{
//     getList ()
//   },[])

//   // console.log(data)

// function getList (){
//   fetch("http://localhost:2000/users").then((result)=>{
//     result.json().then((res,req)=>{
//      // console.log('result',res);
//      setData(res);
//     })
// })
// }


//   function deleteUser(id) {
//       // console.log(id)

//       fetch(`http://localhost:2000/users/${id}`,
//         {
//         method:'DELETE'
//         })
//         .then((result)=>{
//         result.json().then((res)=>{
//           console.log(res)
//           getList ();
//         })

//       })
      
//   }
  
//   return(
//     <div>
//     <h1>GET API Call</h1>

//     <table border='2px'>
//       <thead>
//       <tr>
//         <th>id</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>age</th>
//         <th>mobile</th>
//         <th>operation</th>
//       </tr>
//       </thead>
//       <tbody>
//        {
//         data.map((user,i)=>(
//       <tr key={user.id}>
//         <td>{i+1}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         <td>{user.age}</td>
//         <td>{user.mobile}</td>
//         <td><button onClick={()=>{deleteUser(user.id)}}>Delete</button></td>

//       </tr>

//         ))
//        }
//        </tbody>
//        </table>
//        </div>
//   )

// }
// export default App;
// ==========================================================================================================
// POST API method

// import React, { useState } from 'react'


// function App() {

//   const[name,setName]=useState('');
//   const[age,setAge]=useState(0);
//   const[email,setEmail]=useState('');
//   const[mobile,setMobile]=useState(0);

//   function saveUser(){
    
//     // console.log({name,email,age,mobile})
//     let data = {name,email,age,mobile}
//     console.log(data)

    
//     fetch('http://localhost:2000/users',{
//       method:'POST',
//       headers:{
//         'Accept':'Application/json',
//         'Content-type':'Application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//        console.log(result)
//     })

//   }

//   return (
//     <div>
//       <h1>POST API method</h1>
//       <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name'></input>
//       <br></br>
//       <br></br>
//       <input type='number' name='age' value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='age' ></input>
//       <br></br>
//       <br></br>
//       <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'></input>
//       <br></br>
//       <br></br>
//       <input type='number' name='mobile' value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} placeholder='mobile no'></input>
//       <button type='button' onClick={saveUser}>NewUser</button>      
//     </div>
//   )
// }

// export default App

// ==============================================================================================
// GET API Call 
// always use call you api in state called useEffect


// import React, { useEffect,useState } from 'react'

// function App() {

//   const [data,setData] = useState([]);

//   useEffect(()=>{
//     fetch("https://fakestoreapi.com/products").then((result)=>{
//                result.json().then((res,req)=>{
//                 // console.log('result',res);
//                 setData(res);
      
//                })
//         })
//   },[])

//   console.log(data)

//   return(
//     <div>
//     <h1>GET API Call</h1>

//     <table border='2px'>
//       <tr>
//         <th>id</th>
//         <th>title</th>
//         <th>description</th>
//         <th>price</th>
//         <th>rating</th>
//       </tr>
      
//        {
//         data.map((product)=>(
//       <tr>
//         <td>{product.id}</td>
//         <td>{product.title}</td>
//         <td>{product.description}</td>
//         <td>{product.price}</td>
//         <td>{product.rating.rate}</td>

//       </tr>

//         ))
//        }
//        </table>
//        </div>
//   )

// }
// export default App;

// -------------------------------------------------------------------------------------
// but this npt the standered way to call api
// import React from 'react'

// function App() {
//   fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((result)=>{
//          result.json().then((res,req)=>{
//           console.log('result',res);

//          })
//   })
//   return (
//     <div>
//       <h1>GET API Call</h1>
      
//     </div>
//   )
// }

// export default App  

//======================================================================================================
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import User from './routing/User';

// let users = [
//   { id: 1, name: 'anil', email: 'anil@gmail.com' },
//   { id: 2, name: 'tony', email: 'tony@gmail.com' },
//   { id: 3, name: 'peter', email: 'peter@gmail.com' },
//   { id: 4, name: 'roy', email: 'roy@gmail.com' }
// ];

// function App() {
//   return (
//     <div>
//       <h1>Dynamic Routing</h1>
//       <Router>
//         {users.map((user) => {
//           return (
//             <div key={user.id}>
//               <Link to={`/user/${user.id}`}><h3>{user.name}</h3></Link>
//             </div>
//           );
//         })}
//         <Routes>
//           <Route path="/user/:id" element={<User />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
// ----------------------------------------------------------
// import React from 'react';

// let users = [
//   { id: 1, name: 'anil', email: 'anil@gmail.com' },
//   { id: 2, name: 'tony', email: 'tony@gmail.com' },
//   { id: 3, name: 'peter', email: 'peter@gmail.com' },
//   { id: 4, name: 'roy', email: 'roy@gmail.com' }
// ];

// function App() {
//   return (
//     <div>
//       <h1>Dynamic Routing</h1>

//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <a href={'/user/'+user.id}><h3>{user.name}</h3></a>
//           </div>
//         );
//       })}

//     </div>
//   );
// }

// export default App;

// =========================================================================================================
// // 404 PAGE  
// import React from 'react';
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Router>
//         <Link to="/">Home</Link><br/>
//         <Link to="/about">About</Link>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home component</h1>
//       <p>This is My Home Page</p>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About component</h1>
//       <p>This is My About Page</p>
//     </div>
//   );
// }

// function PageNotFound() {
//   return (
//     <div>
//       <h1>404 Page Not Found</h1>
//     </div>
//   );
// }

// export default App;



// =======================================================================================================
// routing with example with best practise.
// import React from 'react'
// import { Route, Routes} from 'react-router-dom'
// import Nav from './routing/Nav'
// import Home from './routing/Home'
// import About from './routing/About'


// function App() {
//   return (
//     <div>
//       <Nav></Nav>
        
//       <Routes>
        
//         <Route path='/' element={<Home/>} exact={true}></Route>
//         {/* here we can put dirsct html also insted of component */}
//         <Route path='/about' element={<About/>}></Route>
//       </Routes>
      
//     </div>
//   )
// }
// export default App;
// =========================================================================================
// Routing SetUp #47

// import React from 'react'
// import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

// function App() {
//   return (
//     <div>
//       <Router>
//         <Link to='/home'>Home Page</Link><br/>
//         <Link to='/about'>About Page</Link>
//       <Routes>
//         <Route path='/home' element={<Home/>}></Route>
//         <Route path='/about' element={<About/>}></Route>
//       </Routes>
//       </Router>
//     </div>
//   )
// }

// function Home() {
//   return(
//     <div>
//       <h1>Home component</h1>
//       <p>This is My Home Page</p>
//     </div>
//   )
// }

// function About() {
//   return(
//     <div>
//       <h1>About component</h1>
//       <p>This is My About Page</p>
//     </div>

//   )
  
// }

// export default App;

// ================================================================================================
// protected route[it is feature]

// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';
// import Filter from './router/Filter';
// import Contact from './router/Contact';
// import Channel from'./router/Channel';
// import Company from'./router/Company';
// import Other from'./router/Other';
// import Login from './router/Login';
// import ProtedRoute from './router/ProtedRoute';


// function App() {
//   return (
//     <div>

//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
          
//           <Route path='/' element={<ProtedRoute Component={Home}/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/about' element={<ProtedRoute Component={About}/>}/>
//           <Route path='/filter' element={<ProtedRoute Component={Filter}/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
//           <Route path='/contact/' element={<Contact/>}>
//             <Route path='company' element={<Company/>}/>
//             <Route path='channel' element={<Channel/>}/>
//             <Route path='other' element={<Other/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;
// ==================================================================================
// useLocation Route  
// it will provide all data go from this page from route [ex state ,param ,] 
// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';
// import Filter from './router/Filter';
// import Contact from './router/Contact';
// import Channel from'./router/Channel';
// import Company from'./router/Company';
// import Other from'./router/Other';


// function App() {
//   return (
//     <div>

//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/filter' element={<Filter/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
//           <Route path='/contact/' element={<Contact/>}>
//             <Route path='company' element={<Company/>}/>
//             <Route path='channel' element={<Channel/>}/>
//             <Route path='other' element={<Other/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;

// =================================================================================================
// nested routing
// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';
// import Filter from './router/Filter';
// import Contact from './router/Contact';
// import Channel from'./router/Channel';
// import Company from'./router/Company';
// import Other from'./router/Other';


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/filter' element={<Filter/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
//           <Route path='/contact/' element={<Contact/>}>
//             <Route path='company' element={<Company/>}/>
//             <Route path='channel' element={<Channel/>}/>
//             <Route path='other' element={<Other/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;
// =========================================================================================
// Navigation on click and navigation programality
// 
// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';
// import Filter from './router/Filter';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/filter' element={<Filter/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;
// =======================================================================================
// searchParam  and setSearchparams Hook [react router Hook]
// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';
// import Filter from './router/Filter';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/filter' element={<Filter/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// } 
// export default App;
// =======================================================================================
// Active Links

// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App
// =============================================================================
// link and nav link and style
// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
          
//         </Routes>
        
//       </BrowserRouter>
      
//     </div>
//   )
// }
// export default App
// ==========================================================================
// dynamic routing with param
//  
// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import User from './router/User';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/user/:name' element={<User/>}/>
//           <Route path='/*' element={<Navigate to ='/'/>}/>
          
//         </Routes>
        
//       </BrowserRouter>
      
//     </div>
//   )
// }
// export default App

// =========================================================================

// Page 404
// import React from 'react'
// import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// // import Page404 from './router/Page404';


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           {/* <Route path='/*' element={<h1>404 Page</h1>}/> */}
//           <Route path='/*' element={<Navigate to ='/'/>}/>
          
//         </Routes>
        
//       </BrowserRouter>
      
//     </div>
//   )
// }
// export default App
// ----------------------------------------------------
// import React from 'react'
// import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';
// import Page404 from './router/Page404';


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           {/* <Route path='/*' element={<h1>404 Page</h1>}/> */}
//           <Route path='/*' element={<Page404/>}/>
//         </Routes>
        
//       </BrowserRouter>
      
//     </div>
//   )
// }
// export default App

// ========================================================================
// #2 router links

// import React from 'react'
// import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './router/Home';
// import About from './router/About';
// import NavBar from './router/NavBar';

// function App() {
//   return (
//     <div>
     
//      
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//         </Routes>
        
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App
// ----------------------------------------------------------------
// import React from 'react'
// import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import Home from './router/Home';
// import About from './router/About';

// function App() {
//   return (
//     <div>
//       
//       <BrowserRouter>
//       <Link to='/about'>About</Link>
//       <br/>
//       <Link to='/'>Home</Link>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//         </Routes>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App

// =====================================================================================
// React Router v6  #1
// TO INSTALL REACT ROUTER --> npm install react-router@6 react-router-dom@6
// 
// import React from 'react'
// import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './router/Home';
// import About from './router/About';

// function App() {
//   return (
//     <div>
//       {/* <h1> React Router V6+ </h1> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//         </Routes>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App

// ----------------------------------------

// import React from 'react'
// import { BrowserRouter,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       {/* <h1> React Router V6+ </h1> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path='/home' element={<h1>Home Page</h1>} />
//         </Routes>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App


// =============================================================

// #46 Higher Order Component [HOC]
// a Component which take other component as Input and return component as Output called HOC
// import React, { useState } from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Higher Order Component [HOC]</h1>
//       <center style={{ display: 'flex', gap: '20px' }}>
//         <HOCRed cmp={Counter} />
//         <HOCGreen cmp={Counter} />
//         <HOCBlue cmp={Counter} />
//       </center>
//     </div>
//   );
// }

// function HOCRed(props) {
//   return (
//     <div style={{ display: 'block' }}>
//       <h2>Red Counter</h2>
//       <div style={{ backgroundColor: 'red', width: '100px', padding: '10px' }}>
//         <props.cmp />
//       </div>
//     </div>
//   );
// }

// function HOCGreen(props) {
//   return (
//     <div style={{ display: 'block' }}>
//       <h2>Green Counter</h2>
//       <div style={{ backgroundColor: 'green', width: '100px', padding: '10px' }}>
//         <props.cmp />
//       </div>
//     </div>
//   );
// }

// function HOCBlue(props) {
//   return (
//     <div style={{ display: 'block' }}>
//       <h2>Blue Counter</h2>
//       <div style={{ backgroundColor: 'blue', width: '100px', padding: '10px' }}>
//         <props.cmp />
//       </div>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </div>
//   );
// }

// export default App;


// ----------------------


// #45 UnControlled Component
// uncontrolled component are those component which is not
// controlled by react hooks they controlled by dom or other techniques or Ref 
// import React,{useRef}from 'react'


// function App() {
//   let inputRef =useRef(null)
//   let inputRef2 =useRef(null);

//   function submitForm(e){

//     e.preventDefault();
//     console.log('input field 1 value:',inputRef.current.value)
//     console.log('input field 2 value:',inputRef2.current.value)
//     let input3 =document.getElementById('input3').value;
//     console.log('input field 2 value:', input3);

// }

//   return (
//     <div>
//       <h1>Uncontrolled Component</h1>
//       <form onSubmit={submitForm}>
//       <input ref={inputRef} type='text'/><br/><br/>
//       <input ref={inputRef2} type='text'/><br/><br/>
//       <input id='input3' type='text'/><br/><br/>
//       <button>Submit</button>
//       </form>
      
//     </div>
//   )
// }

// export default App


// ----------------------------------

// #44 Controlled Component
// In React when we control input fields with the help of hooks thos are control components.
// Uncontrolled Component-those component that directyl handle though Dom.
// import React,{useState} from 'react'
  
// function App() {
//   let[val,setVal]=useState(0)//<--default value 
//   let [item,setItem]=useState("")
//   return (
//     <div>
//       <h1>Controlled Component</h1>
//        <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} />{/*//defaltvalue='000' */}
//       <p> value 1 : {val}</p>
//       <input type='text' value={item} onChange={(e)=>setItem(e.target.value)} />
//       <p> value 2 : {item}</p>

//     </div>
//   )
// }

// export default App


// ---------------------------------------------

// #43 forwardRef in React
// when our dom component are present in differnt react Component then we want use Dom manipulation 
// or focrecful dom manipulation then we use forward ref hook 
// [ for example button in different component and inputbox in different component]

// import React,{useRef}from 'react'
// import Child from './components/Child'

// function App() {
// let inputRef = useRef(null);
// function updateInput(){
//   inputRef.current.value = 1000;
//   inputRef.current.style.color = 'green';
//   inputRef.current.focus();
// }

//   return (
//     <div>
//       <h1>forwardRef in React</h1>
//       <Child ref={inputRef}></Child>
//       <br></br>
//       <button onClick={updateInput}>Upadate Inputbox</button>
      
//     </div>
//   )
// }

// export default App;


// -------------------------------------
// #42 useRef Hook for forceful dom manipulation in functional component.
// some times we have to do direct modification in dom rather than using hooks and states then useRef come in to picture.
// import React,{useRef} from 'react'

// function App() {
//   let inputRef =useRef(null)
//   function handleInput(){
//     console.log('handle input')
//     // add value to input box
//     // inputRef.current.value=1000;
//     // add focus to input box
//     // inputRef.current.focus();
//     // to change style
//     // inputRef.current.style.color='pink';
//     // display property
//     inputRef.current.style.display='none';

//   }
//   return (
//     <div>
//       <h1>useRef Hook in React</h1>
//       <input type='text' ref={inputRef}/>
//       <button onClick={handleInput}>Handle Input</button>

//     </div>
//   )
// }

// export default App;

// ---------------------

// // #41focrce ful dom manipulation is done with it 
// import React, { Component, createRef } from 'react';

// export class App extends Component {
//   constructor() {
//     super();
//     this.inputRef = createRef();
//   }

//   componentDidMount() {
//     // console.log(this.inputRef.current.value = '1000');
//   }

//   getval = () => {
//     console.log(this.inputRef.current.value);
//     this.inputRef.current.style.color='red'
//     this.inputRef.current.style.backgroundColor='green'
//   }

//   render() {
//     return (
//       <div>
//         <h1>Ref in React</h1>
//         <input type='text' ref={this.inputRef} />
//         <button onClick={this.getval}>Check Ref</button>
//       </div>
//     );
//   }
// }

// export default App;




// -------------------------------------------


// import React,{useState,useMemo} from 'react'

// function App() {

//   const [count,setCount]=useState(0);
//   const [item,setItem]=useState(10);

//   const multiCountMemo = useMemo(
//     function multiCount(){
//     console.log('multiCount');
//     return count*5;
//   },[count]);

  

//   return (
//     <div>
//       <h1>useMemo Hook in React</h1>
//       <p>count : {count}</p>
//       <p>item : {item}</p>
//       <p>{multiCountMemo}</p>
//       <button onClick={()=>{setCount(count+1)}}>Update Count</button>
//       <button onClick={()=>{setItem(item*10)}}>Update item</button>
      
//     </div>
//   )
// }

// export default App




// --------------------------------------------------------------

// import React, { Component,PureComponent} from 'react'
// import User4 from './components/User4';

// export class App extends PureComponent {
// constructor(){
//   super();
//   this.state={
//     count:1
//   }
// }

//   render() {
//     console.log('check rerendaring');
//     return (
//       <div>
//         <h1>Pure Component in react</h1>
//         <h2>{this.state.count}</h2>
        
        
//       </div>
//     )
//   }
// }

// export default App;



// pure conponent stop re rendaring our component is state does not change
// import React, { Component,PureComponent} from 'react'

// export class App extends PureComponent {
// constructor(){
//   super();
//   this.state={
//     count:1
//   }
// }

//   render() {
//     console.log('check rerendaring');
//     return (
//       <div>
//         <h1>Pure Component in react</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={()=>{
//           this.setState({count:1})
//           // this.setState({count:this.state.count+1})
//         }}>Upadate Count</button>
        
//       </div>
//     )
//   }
// }

// export default App





// send data from parent to child
// import React from 'react';
// import User3 from './components/User3';

// function App() {
//   function parentAlert(data) {
//     alert(`Hello, ${data}`);
//   }

//   return (
//     <div>
//       <h1>Lifting State Up</h1>
//       <User3 alert={parentAlert} />
//     </div>
//   );
// }

// export default App;


// send data from parent to child

// import React from 'react'
// import User3 from './components/User3'

// function App() {
//   let data ='anil sidhu'
//   return (
//     <div>
//       <h1>Lifting State Up</h1>
//       <User3 name={data}></User3>
      
//     </div>
//   )
// }

// export default App

// ---------------------------------

// import React from 'react'

// function App() {
//   return (
//     // method-3 to use react fragments [most used]
//     <>
//       <h1>React Fragments</h1>
//     </>
    
//   )
// }

// export default App



// import React,{Fragment} from 'react'

// function App() {
//   return (
//     // method-2 to use react fragments
//     <Fragment>
//       <h1>React Fragments</h1>
//     </Fragment>
//   )
// }

// export default App



// import React from 'react'

// function App() {
//   return (
//     // method-1 to use react fragments
//     <React.Fragment>
//       <h1>React Fragments</h1>
//     </React.Fragment>
//   )
// }

// export default App

// ------------------------------

// import React from 'react'
// import ArrUser from './components/ArrUser'

// function App() {

//   const users=[
//     {name:"anil",email:"anil@gmail.com",contact:0},
//     {name:"sidhu",email:"sidhu@gmail.com",contact:111},
//     {name:"sam",email:"sam@gmail.com",contact:222},
//     {name:"peter",email:"peter@gmail.com",contact:333}
//   ]

//   return (
//     <div>
//       <h1>Reuse Component</h1>
     
//       {
//         users.map((data, i)=>(
//           <ArrUser  key={i} data={data}/>
//         ))
//       }
      
//     </div>
//   )
// }

// export default App

// ------------------------------
// import React from 'react'

// function App() {

//   const users=[
//     {name:"anil",email:"anil@gmail.com",address:[
//       {Hno:100,city:'noida',country:'India'},
//       {Hno:101,city:'dehli',country:'India'},
//       {Hno:102,city:'pune',country:'India'}

//     ]},
//     {name:"sidhu",email:"sidhu@gmail.com",address:[
//       {Hno:10,city:'mumbia',country:'India'},
//       {Hno:20,city:'hydrabad',country:'India'},
//       {Hno:30,city:'bengluru',country:'India'}

//     ]},
//     {name:"sam",email:"sam@gmail.com",address:[
//       {Hno:40,city:'sector1',country:'India'},
//       {Hno:50,city:'7R-cr',country:'India'},
//       {Hno:60,city:'juhu',country:'India'}
//     ]},
//     {name:"peter",email:"peter@gmail.com",address:[
//       {Hno:70,city:'Nanded',country:'India'},
//       {Hno:80,city:'CS sambaji N',country:'India'},
//       {Hno:90,city:'Amravati',country:'India'}

//     ]}
//   ]


//   return (
//     <div>
//       <h1>List With Nested List</h1>
//       <table className="table table-hover">
//         <tbody>
//           <tr>
//           <th>SrNo</th>
//            <th>Name</th>
//            <th>Email</th>
//            <th>Address</th>
//           </tr>
//           {
//           users.map((data,i)=>(
//             <tr key={i}>
//             <td>{i+1}</td>
//             <td>{data.name}</td>
//             <td>{data.email}</td>
//             <td>
//               <table className="table table-hover">
//                 <tbody>
//                 <tr>

//                   <th>Hno</th>
//                   <th>City</th>
//                   <th>Country</th>
//                 </tr>
//               {
//                 data.address.map((item,j)=>(
//                   <tr key={j}>
                  
//                   <td>{item.Hno}</td>
//                   <td>{item.city}</td>
//                   <td>{item.country}</td>
//                 </tr>
//                 ))
//               }
//               </tbody>
//               </table>
//             </td>
//           </tr>
//           ))
//         }
//         </tbody>
       
//       </table>
//     </div>
//   )
// }
// export default App

//----------------------------------





// import React from 'react'

// function App() {

//   const users=[
//     {name:"anil",email:"anil@gmail.com",contact:0},
//     {name:"sidhu",email:"sidhu@gmail.com",contact:111},
//     {name:"sam",email:"sam@gmail.com",contact:222},
//     {name:"peter",email:"peter@gmail.com",contact:333}
//   ]


//   return (
//     <div>
//       <h1>List With Bootsrap Table</h1>
//       <table className="table table-hover">
//       <tbody>
//       <tr>
//               <td>Name</td>
//               <td>Email</td>
//               <td>Contact</td>
//       </tr>
//       {
//         users.map((data,index)=>(
//           <tr key={index}>
//               <td>{data.name}</td>
//               <td>{data.email}</td>
//               <td>{data.contact}</td>
//           </tr>
//         ))
//       }
//       </tbody>
//       </table>
      
//     </div>
//   )
// }

// export default App


// -----------------------------


// import React from 'react'

// function App() {
//   // const students =['Anil','sidhu','sam','peter'];

//   const students=[
//     {name:"anil",email:"anil@gmail.com",contact:0},
//     {name:"sidhu",email:"sidhu@gmail.com",contact:111},
//     {name:"sam",email:"sam@gmail.com",contact:222},
//     {name:"peter",email:"peter@gmail.com",contact:333}
//   ]
    

//   // map looping
//   // students.map((item)=>{
//   //     console.log("My Name is:",item)
//   // })
//   // console.log("---------------------------");
//   // for looping
//   //not support in react
//   //  for(let i=0;i<students.length; i++){
   
//   //   console.log("My Name is:",students[i]);

//   //  }

//   return (
//     <div>
//       <h1>Handle list With Array</h1>

//       <table border='1px'>
//         <thead >
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//           students.map((data, index) => (
//             <tr key={index}>
//               <td>{data.name}</td>
//               <td>{data.email}</td>
//               <td>{data.contact}</td>
//             </tr>
//           ))
//           }
//         </tbody>
//       </table>
       
//     </div>
//   )
// }

// export default App

// --------------------------

//import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Bootsrap5 use in react application</h1>
//       <button type="button" className="btn btn-primary">Primary</button>
//       <button type="button" className="btn btn-secondary">Secondary</button>
//       <button type="button" className="btn btn-success">Success</button>
//       <button type="button" className="btn btn-danger">Danger</button>
//       <button type="button" className="btn btn-warning">Warning</button>
//       <button type="button" className="btn btn-info">Info</button>
//       <button type="button" className="btn btn-light">Light</button>
//       <button type="button" className="btn btn-dark">Dark</button>
//       <button type="button" className="btn btn-link">Link</button>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import './style.css';
// import style from './custom.module.css';

// function App() {
//   return (
//     <div>
//       <h1>Style in React Js</h1>
//       <h2 className='primary'>TYPE-1 CSS file</h2>
//       <h2 style={{'color':'red','backgroundColor':'yellow'}}>TYPE-2 Inline Style</h2>
//       <h2 className={style.sucess}>TYPE-3 Module file style</h2>
      
//     </div>
//   )
// }

// export default App



// import React,{useState, useEffect} from 'react'
// import User2 from './components/User2'
   
//    function App() {
//     const[data, setData]=useState(10)
//     const[count, setCount]=useState(100)


//      return (
//        <div>
//         <h1>useEffect-attach to different props and states</h1>
       
//         <User2 count={count} data={data}></User2>
//         <button onClick={()=>{setCount(count+1)}}>Update Counter</button>
//         <button onClick={()=>{setData(data+1)}}>Update Data</button>
         
//        </div>
//      )
//    }
   
//    export default App;



  //  import React,{useState, useEffect} from 'react'
   
  //  function App() {
  //   const[data, setData]=useState(10)
  //   const[count, setCount]=useState(100)

  //   useEffect(()=>{
  //     console.log(`use effect called for data`);
  //   },[data])

  //   useEffect(()=>{
  //     console.log(`use effect called for count`);
  //   },[count])

  //    return (
  //      <div>
  //       <h1>useEffect-attach to different props and states</h1>
  //       <p>Count:{count}</p>
  //       <p>Data:{data}</p>

  //       <button onClick={()=>{setCount(count+1)}}>Update Counter</button>
  //       <button onClick={()=>{setData(data+1)}}>Update Data</button>
         
  //      </div>
  //    )
  //  }
   
  //  export default App;




// import React,{useEffect,useState} from 'react'

// function App() {
//   //you can use useEffect Hook 
//   // React.useEffect(()=>{})
//   //without importing 
//   const [count,setCount]=useState(0);

//   useEffect(()=>{
//     // alert('useEffect');
//     console.log('useEffect')
//   })

//   return (
//     <div>
//       <h1>Hooks-useEffect Hooks</h1>
//       <p>{count}</p>
//       <button onClick={()=>{setCount(count+1)}}>Update Counter</button>
      
//     </div>
//   )
// }

// export default App






// import React,{useState} from 'react'

// function App() {
//   const [data,setData]=useState('Anil')
//   return (
//     <div>
//       <h1>Hooks-useState Hooks</h1>
//       <p>{data}</p>
//       <button onClick={()=>{setData('Sidhu')}}>Upadate Data</button>
      
//     </div>
//   )
// }

// export default App;





// import React, { Component } from 'react'
// import Student from './components/Student';

// export class App extends Component {
//   constructor(){
//     super();
//     this.state={
//         show:true
//     }
// }
//   render() {
//     return (
//       <div>
//         <h1>Component will Unmount</h1>
//         {
//           this.state.show ? <Student></Student>:null
//         }
        
//         <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle child component</button>
        
//       </div>
//     )
//   }
// }

// export default App




// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate(){
//     console.log(`shouldComponentUpdate`,this.state.count);
//     if(this.state.count<10){
//       return true
//     }
//     return false

//   }
//   render() {
//     return (
//       <div>
//         <h1>Should Component Update {this.state.count}</h1>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
//       </div>
//     )
//   }
// }

// export default App




// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(){
//     super();
//     console.log(`constructor`);
//     this.state={
//       count:0
//       // name:'anil'
//     }
//   }
//   componentDidUpdate(preProps,preState,snapshot){
//     console.log(`componentDidUpdate`,preState);
//   }
//   render() {
//     console.log(`render`);
//     return (
//       <div>
//       <h1>Component Did Update {this.state.count}</h1>
//       <button onClick={()=>{this.setState({/*name:'sidhu'*/
//         count:this.state.count+1
//       })}}>Update Name</button>
        
//       </div>
//     )
//   }
// }

// export default App




// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:'anil'
//     }
//   }
//   componentDidMount(){
//     console.log(`componentDidMount`);
//   }
//   render() {
//     console.log(`render`);
//     return (
//       <div>
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={()=>{this.setState({name:'sidhu'})}}>Upadate Name</button>
        
//       </div>
//     )
//   }
// }







// import React, { useState } from 'react'
// import User1 from './components/User1'

 
// function App() {
//     const [name,setName]=useState('anil');
//   return (
//     <div>
//     <h1>Render Life Cycle</h1>
//     <User1></User1>
    
      
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import User1 from './components/User1'

 
// function App() {
//     const [name,setName]=useState('anil');
//   return (
//     <div>
//     <h1>Render Life Cycle</h1>
//     <User1 name={name}></User1>
//     <button onClick={()=>{setName('shidhu')}}>Upadate Name</button>
      
//     </div>
//   )
// }

// export default App







// import React, { Component } from 'react'

// export class App extends Component {

//   constructor(){
//     super()
//     // console.log('Constructor');
//     this.state={
//       data:'anil'
//     }
//   }

//   render() {
//     // console.log('Render');
//     return ( 
//       <div>
//         <h1>Hello {this.state.data}</h1>
        
//       </div>
//     )
//   }

// }

// export default App









// import React from 'react'
// import User from './components/User'
// import Members from './components/Members';

// function App() {
//   function getData(){
//     alert('hello from app');
//   }
//   return (
//     <div>
//       <h1>Pass Function As Pass</h1>
//       <User data={getData}></User>
//       <div>
//       <Members data={getData}></Members>
//       </div>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';
// import Login from './components/Login';


// function App() {
 
//   return (
//     <div className='App'>
//       <h1>Basic Form Validation</h1>
//        <Login></Login>
     
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import Profile from './components/Profile';

// function App() {
//   return (
//     <div className='App'>
//       <h1>Conditional Rendaring</h1>
//       <Profile></Profile>
//     </div>
//   );
// }
// export default App;




// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState('');

//   function getFormData(e) {
//     e.preventDefault();
//     console.log(name, tnc, interest);
//   }

//   return (
//     <div className='App'>
//       <h1>Handle form in React</h1>
//       <form onSubmit={getFormData}>
//         <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
//         <br /><br />
//         <select onChange={(e) => setInterest(e.target.value)}>
//           <option value=''>Select interest</option>
//           <option value='Marvel'>Marvel</option>
//           <option value='DC'>DC</option>
//         </select>
//         <br /><br />
//         <input  type='checkbox' onChange={(e) => setTnc(e.target.checked)}/>
//         <span>Accept terms and conditions</span>
//         <br /><br />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react'

// function App() {
//   const [status,setStatus]=useState(true);
//   return (
//     <div className='App'>
//       {
//         status ? <h1>Hello World</h1> : null
//       }
      
//       <button onClick={()=>{setStatus(!status)}}>Toggle</button>
      
//     </div>
//   )
// }

// export default App;



// import React, { useState } from 'react'

// function App() {
//   const [status,setStatus]=useState(true);
//   return (
//     <div className='App'>
//       {
//         status ? <h1>Hello World</h1> : null
//       }
      
//       <button onClick={()=>{setStatus(false)}}>Hide</button>
//       <button onClick={()=>{setStatus(true)}}>Show</button>
      
//     </div>
//   )
// }

// export default App;



// import React,{useState} from 'react'

//  function App() {

//   const[data,setData]=useState(null);
//   const[print,setPrint] = useState(false);

//    function getData(val){
//     console.log(val.target.value);
//     setData(val.target.value);
//     setPrint(false)
//   }

//   return (
//     <div>
//         <h1>get input value</h1>
//         { print ? <p>{data}</p> : null }
//         <input type='text' onChange={getData}></input>
//         <button onClick={()=>{setPrint(true)}}>Print Data</button>
//     </div>
//   )
// }
// export default App;




// import React,{useState} from 'react'

//  function App() {
//   const[data,setData]=useState(null)
//    function getData(val){
//     console.log(val.target.value);
//     setData(val.target.value);

//   }
//   return (
//     <div>
//         <h1>get input value</h1>
//         <input type='text' onChange={getData}></input>
//         <p>{data}</p>
//     </div>
//   )
// }
// export default App;