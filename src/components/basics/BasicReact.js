import React from 'react'

//jsx
// import Hello from './Jsx'
// import StyleJsx from "./StyleJsx";

// components
// import Component from './Component'

// props
// import PropsFunction, { PropsClass, PropsChild, PropsExpression  } from "./Propes";
// import ParentComponent from "./MethodsAsProps";

// state
// import States, {ClassCounter, FunctionStates} from "./States";
// import EventBind from "./EventBind";

// import Conditional from "./ConditionalRendering";
// import NameList, {NameObject} from "./NameList";

import ReactFormHandling from "./FormHandling";
// import ReactPlayer from 'react-player';


const BasicReact = () => {
  return (
    <div>
        {/* <Hello/> */}
      {/* <StyleJsx /> */}
      {/* <Component /> */}

      {/* props */}
      {/* 
        <PropsFunction type="function" rate="good"/>
        <PropsClass/>
        <PropsChild>
          <button>this is a button, which is added from app.js file</button>
        </PropsChild> 
      <PropsExpression math={2*2} />
      */}
      {/* <ParentComponent /> */}

      {/* state  */}
      {/* <States /> */}
      {/* <ClassCounter /> */}
      {/* <FunctionStates /> */}
      {/* <EventBind /> */}
      {/* <Conditional /> */}
      {/* <NameList /> */}
      {/* <NameObject /> */}

      <ReactFormHandling />
      {/* <ReactPlayer /> */}
    </div>
  )
}

export default BasicReact