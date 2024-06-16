import React from 'react';
import { CommonContext } from './CommonContex';

function Updatebutton() {
 
  return (
    <CommonContext.Consumer>
      {
        ({ updateColor }) => (
          <button onClick={updateColor}>Update Color</button>
        )
      }
    </CommonContext.Consumer>
  );
}

export default Updatebutton;
