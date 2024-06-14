import { Button } from 'react-bootstrap'; 
import React from 'react'
import { CommonContext } from './CommonContex'

function Updatebutton() {
  return (
    <div>
      <CommonContext.Consumer>
        {
            ({updateColor})=>(
               <Button onClick={()=>{updateColor()}}>Update Color</Button>
            )
        }
        </CommonContext.Consumer>
    </div>
  )
}
export default Updatebutton
