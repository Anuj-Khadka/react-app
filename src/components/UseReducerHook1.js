import React, { useReducer } from "react";

function UseReducerHook1() {
  return (
    <div>
      <CounterOne />
    </div>
  );
}

// useReducer (simple state & action)
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

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Subract
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducerHook1;
