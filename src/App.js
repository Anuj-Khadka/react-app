import "./App.css";
//jsx
// import Hello from './components/Jsx'
// import StyleJsx from "./components/StyleJsx";

// components
// import Component from './components/Component'

// props
import PropsFunction, { PropsClass, PropsChild, PropsExpression  } from "./components/Propes";



function App() {
  return (
    <div className="App">
      <>
        {/* <Hello/> */}
        {/* <StyleJsx /> */}
        {/* <Component /> */}

        <PropsFunction type="function" rate="good"/>
        {/* props */}
        {/* 
        <PropsClass/>
        <PropsChild>
          <button>this is a button, which is added from app.js file</button>
        </PropsChild> 
      */}
      <PropsExpression math={2*2} />
      </>
    </div>
  );
}

export default App;
