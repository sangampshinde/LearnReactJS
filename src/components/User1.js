import React, { Component } from "react";

export class User1 extends Component {
  constructor(){
    super(); 
    this.state={
      email:'anil@gmail.com'
    }
  }
  

  render() {
    console.log("Render method",this.state.email);
    return (
      <div>
        <h1>User Component {this.state.email}  </h1>
        <button onClick={()=>{this.setState({email:'siddhu@gmail.com'})}}>Update email</button>
        
      </div>
    );
  }
}

export default User1;



// import React, { Component } from "react";

// export class User1 extends Component {
  

//   render() {
//     console.log("Render method",this.props);
//     return (
//       <div>
//         <h1>User Component {this.props.name} </h1>
        
//       </div>
//     );
//   }
// }

// export default User1;




