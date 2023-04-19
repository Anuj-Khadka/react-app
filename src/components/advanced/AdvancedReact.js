import React from "react";

// lifecycle methods
// import MountLifecycle from './MountLifecycle'
// import MountLifecycleParent from './MountLifecycleParent'
// import UpdateLifecycleParent from "./UpdateLifecycleParent";

// pure components
// import PureParentComponent from "./PureParentComponent";
// import MemoParentComponent from "./MemoParentComponent";

// refs
// import RefsDemo from "./RefsDemo";
// import RefsWithClassComponentParent from "./RefsWithClassComponent";
// import ForwardRefParent from "./ForwardRefParent";

// import PortalDemo from "./PortalDemo";

// error boundary
// import ErrorBoundary, { ErrorChild } from "./ErrorBoundary";

// higher order component
// import ClickCounter, { NewHoverCounter } from "./HigherOrderComp";
// import DemoRenderProps, {
//   ClickCounterRenderProps,
//   CounterRenderProps,
//   HoverCounterRenderProps,
// } from "./RenderProps";

// import ComponentMain from "./UserContext";


// fetch data
// import HttpGetList from "./HttpGetList";
import HttpPostForm from "./HttpPostForm";

const AdvancedReact = () => {
  return (
    <div>
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
      <HttpPostForm />
    </div>
  );
};

export default AdvancedReact;
