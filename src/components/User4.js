import React, { Component,PureComponent} from 'react'

export class User4 extends Component {


  render() {
    
    return (
      <div>
        <h1>User4 Component</h1>
        
        <button onClick={()=>{
          this.setState({count:1})
          // this.setState({count:this.state.count+1})
        }}>Upadate Count</button>
        
      </div>
    )
  }
}

export default User4;