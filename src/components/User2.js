import React,{useEffect} from 'react'
   
   function User2(props) {
    

    useEffect(()=>{
      console.log(`use effect for count`,props.count,props.data);
    },[props.count,props.data])

     return (
       <div>
        <h2>User2 Component</h2>
        <p>Count Prop:{props.count}</p>
        <p>Data Prop:{props.data}</p>
       </div>
     )
   }
   
   export default User2;




  //  single condition
  //  import React,{useEffect} from 'react'
   
  //  function User2(props) {
    

  //   useEffect(()=>{
  //     console.log(`use effect for count`,props.count);
  //   },[props.count])

    

  //    return (
  //      <div>
  //       <h2>User2 Component</h2>
  //       <p>Count Prop:{props.count}</p>
  //       <p>Data Prop:{props.data}</p>
  //      </div>
  //    )
  //  }
   
  //  export default User2;