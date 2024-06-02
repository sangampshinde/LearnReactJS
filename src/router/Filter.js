import React from 'react'
import {useSearchParams} from 'react-router-dom'

function Filter() {
    const [searchParams,setSearchparams]=useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('city'));
    const age = searchParams.get('age');
    const city = searchParams.get('city');

  return (
    <div>
        <h1>Filter Page</h1>
        <p>age is : {age}</p>
        <p>city is : {city}</p>
        <input  type='text' onChange={(e)=>setSearchparams({text:e.target.value,age:10})} placeholder='Set age in Query param'></input>
        <button onClick={()=>setSearchparams({age:40})}>Set age in Query param</button>
        
      
    </div>
  )
}

export default Filter
