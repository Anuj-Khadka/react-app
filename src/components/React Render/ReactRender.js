import React from "react";
import Parent from "./ParentChildComponents";
import StateImmutibility from "./StateImmutibility";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

const ReactRender = () => {
  return (
    <div>
      ReactRender
      {/* 
      <br />
      <br />
      useState
      <UseState />
      <br />
      <br />
      useReducer
      <UseReducer />
      <br />
      <br />
      State Immutability with useState and useReducer
      <StateImmutibility /> 
      */}
      <br />
      <br />
      Parent Child Rendering
      <Parent />
    </div>
  );
};

export default ReactRender;
