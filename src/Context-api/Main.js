import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h3>main Component</h3>
        <CommonContext.Consumer >
        <h1>Context Api</h1>
        </CommonContext.Consumer>
        
      </div>
    )
  }
}
