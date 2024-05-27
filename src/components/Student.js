import React, { Component } from 'react'


export class Student extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
   
  render() {
    return (
      <div>
        <h2>Student Component</h2>
        
      </div>
    )
  }
}

export default Student
