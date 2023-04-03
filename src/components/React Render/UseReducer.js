import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log("reducer render");
  return (
    <div>
      Count - {count}
      <button onClick={() => dispatch("increment")}>Count Increment</button>
      <button onClick={() => dispatch("decrement")}>Count Decrement</button>
      <button onClick={() => dispatch("reset")}>Count Reset</button>
    </div>
  );
};

export default UseReducer;
