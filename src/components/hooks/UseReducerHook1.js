import React, { useReducer } from "react";

function UseReducerHook1() {
  return (
    <div>
      {/* basic useReducer
      <CounterOne /> */}
      complex useReducer
      <CounterComplex />
    </div>
  );
}

// useReducer (simple state & action)
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const CounterOne = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <div>{count}</div>
//       <button
//         onClick={() => {
//           dispatch("increment");
//         }}
//       >
//         Add
//       </button>
//       <button
//         onClick={() => {
//           dispatch("decrement");
//         }}
//       >
//         Subract
//       </button>
//       <button
//         onClick={() => {
//           dispatch("reset");
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterComplex = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count.firstCounter}</div>
      <div>{count.secondCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Subract
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment2", value: 1 });
        }}
      >
        Add button 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2", value: 1 });
        }}
      >
        Subract button 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Add 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Subract 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducerHook1;
