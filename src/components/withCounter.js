import React from "react";
import { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0); //create a Hook
    //render OriginalComponent and pass on its props.
    return <OriginalComponent counter={counter} incrementCounter={()=>setCounter((counter)=>counter+1)} name='sanjay'/>;
  }
  return NewComponent;
};
export default UpdatedComponent;