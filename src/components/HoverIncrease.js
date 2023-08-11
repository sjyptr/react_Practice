import React from 'react'
import { useState } from "react";
import withCounter from "./withCounter.js"
function HoverIncrease(props) {
    const { counter, incrementCounter ,name} = props; 

    return (
      <div>
        {/*Use the incrementCounter method to increment the 'counter' state..*/}
        <button onMouseOver={() => incrementCounter()}>Increment counter</button> 
        {/*Render the value of our 'counter' variable:*/}
        <p> Value of 'counter' in HoverIncrease/ClickIncrease: {counter}</p>
      </div>
    );
}

export default  withCounter(HoverIncrease);