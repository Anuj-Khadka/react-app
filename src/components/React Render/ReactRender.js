import React from "react";
import {
  ChildA,
  ContextAndMemoParent,
} from "./Incorrect Memo Optimization/ContextAndMemo";
import IncorrectWithPropsReference from "./Incorrect Memo Optimization/IncorrectWithPropsReference";
import IncorrectWithImpureComponent from "./Incorrect Memo Optimization/IncorrectWithImpureComponent";
import IncorrectWithChildrenParent from "./Incorrect Memo Optimization/IncorrectWithChildren";
import ReactMemoParent from "./ReactMemo";
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
      <br />
      <br />
      Parent Child Rendering
      <Parent />
      <br />
      <br />
      React Memo Rendering
      <ReactMemoParent />
      <br />
      <br />
      Incorrect Memo With Children Rendering
      <IncorrectWithChildrenParent />
      <br />
      <br />
      Incorrect Memo With Impure Component Rendering
      <IncorrectWithImpureComponent />
      <br />
      <br />
      Incorrect Memo With Impure Component Rendering
      <IncorrectWithPropsReference />
      */}
      <br />
      <br />
      React Context Rendering
      {/* <ContextAndMemoParent /> */}
      another way to optimize Context rendering
      <ContextAndMemoParent>
        {" "}
        <ChildA />
      </ContextAndMemoParent>
    </div>
  );
};

export default ReactRender;
