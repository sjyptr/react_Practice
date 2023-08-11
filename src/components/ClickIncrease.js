import React from 'react'
import { useState } from "react";
import withCounter from "./withCounter.js"

function ClickIncrease(props) {
    const { counter, incrementCounter ,name} = props; 

return (
  <div>
    {/*Use the incrementCounter method to increment the 'counter' state..*/}
    <button onClick={() => incrementCounter()}>Increment counter</button> 
    {/*Render the value of our 'counter' variable:*/}
    <p> Value of 'counter' in HoverIncrease/ClickIncrease: {counter}</p>
    <p> name: {name}</p>
  </div>
);
}

export default withCounter(ClickIncrease);