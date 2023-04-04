import React, { useState, useContext } from "react";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export const ContextAndMemoParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("ContextAndMemoParent Render");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        {children}
        {/* <MemoizedChildA /> */}
      </CountProvider>
    </>
  );
};

export const ChildA = () => {
  console.log("Child A Render");
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
};


// one way to optimize context rendering method
export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("Child B Render");
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C Render");
  return (
    <>
      <div>Child C - Count = {count}</div>
    </>
  );
};
