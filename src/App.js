import "./App.css";
//jsx
// import Hello from './components/Jsx'
// import StyleJsx from "./components/StyleJsx";

// components
// import Component from './components/Component'

// props
// import PropsFunction, { PropsClass, PropsChild, PropsExpression  } from "./components/Propes";

// state
import States, {ClassCounter, FunctionStates} from "./components/States";



function App() {
  return (
    <div className="App">
      <>
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

      {/* state  */}
      {/* <States /> */}
      {/* <ClassCounter /> */}
      <FunctionStates />
      </>
    </div>
  );
}

export default App;
