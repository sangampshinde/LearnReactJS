import React, { useState } from 'react'
import User1 from './components/User1'

 
function App() {
    const [name,setName]=useState('anil');
  return (
    <div>
    <h1>Render Life Cycle</h1>
    <User1 name={name}></User1>
    <button onClick={()=>{setName('shidhu')}}>Upadate Name</button>
      
    </div>
  )
}

export default App



















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