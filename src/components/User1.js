import React, { Component } from 'react'

export class User1 extends Component {
  constructor(){
    super()
    this.state
  }
    

  render() {
    console.log('Render method',this.props);
    return (
      <div>
        <h1>User Component {this.props.name}</h1>
        
      </div>
    )
  }
}

export default User1;
