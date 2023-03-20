import "./App.css";
//jsx
// import Hello from './components/Jsx'
// import StyleJsx from "./components/StyleJsx";

// components
// import Component from './components/Component'

// props
// import PropsFunction, { PropsClass, PropsChild, PropsExpression  } from "./components/Propes";
// import ParentComponent from "./components/MethodsAsProps";

// state
// import States, {ClassCounter, FunctionStates} from "./components/States";
// import EventBind from "./components/EventBind";

// import Conditional from "./components/ConditionalRendering";
// import NameList, {NameObject} from "./components/NameList";

// import ReactFormHandling from "./components/FormHandling";

// lifecycle methods
// import MountLifecycle from "./components/MountLifecycle";
// import MountLifecycleParent from "./components/MountLifecycleParent";
// import UpdateLifecycleParent from "./components/UpdateLifecycleParent";

// pure components
// import PureParentComponent from "./components/PureParentComponent";
// import MemoParentComponent from "./components/MemoParentComponent";

// refs
// import RefsDemo from "./components/RefsDemo";
// import RefsWithClassComponentParent from "./components/RefsWithClassComponent";
// import ForwardRefParent from "./components/ForwardRefParent";

// import PortalDemo from "./components/PortalDemo";

// error boundary
// import ErrorBoundary, { ErrorChild } from "./components/ErrorBoundary";

// higher order component
// import ClickCounter, { NewHoverCounter } from "./components/HigherOrderComp";
// import DemoRenderProps, {
//   ClickCounterRenderProps,
//   CounterRenderProps,
//   HoverCounterRenderProps,
// } from "./components/RenderProps";

// import ComponentMain from "./components/UserContext";

// import HttpGetList from "./components/HttpGetList";
// import HttpPostForm from "./components/HttpPostForm";

import ReactPlayerApp from "./components/ReactPlayer";

function App() {
  return (
    <div className="App">
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

      {/* <ReactFormHandling /> */}

      {/* lifecycle methods  */}
      {/* <MountLifecycle /> */}
      {/* < MountLifecycleParent /> */}
      {/* <UpdateLifecycleParent /> */}

      {/* pure components */}
      {/* <PureParentComponent /> */}
      {/* <MemoParentComponent /> */}

      {/* refs */}
      {/* <RefsDemo /> */}
      {/* <RefsWithClassComponentParent /> */}
      {/* <ForwardRefParent /> */}

      {/* <PortalDemo /> */}

      {/* error boundary */}
      {/* <ErrorBoundary>
        <ErrorChild name="super" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorChild name="duper" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorChild name="noname" />
      </ErrorBoundary> */}

      {/* higher order components */}
      {/* <ClickCounter yourName="noname" />
      <NewHoverCounter /> */}

      {/* render props */}
      {/* <DemoRenderProps
        render={(isLoggedIn) => (isLoggedIn ? "user" : "guest")}
      />
      {/* <CounterRenderProps
        render={(count, countIncrement) => (
          <ClickCounterRenderProps
            count={count}
            countIncrement={countIncrement}
          />
        )}
      /> */}
      {/* <CounterRenderProps
        render={(count, countIncrement) => (
          <HoverCounterRenderProps
            count={count}
            countIncrement={countIncrement}
          />
        )} 
      /> */}
      {/* you can directly embbed the function into it  */}
      {/* <CounterRenderProps>
        {(count, countIncrement) => (
          <HoverCounterRenderProps
            count={count}
            countIncrement={countIncrement}
          />
        )}
      </CounterRenderProps> */}

      {/* context */}
      {/* <ComponentMain /> */}

      {/* http request */}
      {/* <HttpGetList /> */}
      {/* <HttpPostForm /> */}

      <ReactPlayerApp />


    </div>
  );
}

export default App;
