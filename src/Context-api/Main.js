import React, { Component } from 'react'
import { CommonContext } from './CommonContex'

export default class Main extends Component {
  render() {
    return (
      <div>
        <CommonContext.Consumer>
          {
            ({color})=>(
              <h1 style={{color:color}}>Hello,this is main page</h1>
            )

            
          }
        </CommonContext.Consumer>
      </div>
    )
  }
}
