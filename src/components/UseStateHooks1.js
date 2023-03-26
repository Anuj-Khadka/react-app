import React, { useState } from "react";

const UseStateHooks = () => {
  return (
    <div>
      basic useState
      <UseStateCounter />
      <br />
      <br />
      useState with previous state
      <UseStatePrevStateCounter />
    </div>
  );
};

// basic useState

function UseStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

// useState with previous state
function UseStatePrevStateCounter() {
  const initailCount = 0;
  const [count, setCount] = useState(initailCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      Clicked {count} times
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        add
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        subract
      </button>
      <button onClick={incrementFive}>add 5</button>
      <button onClick={() => setCount(initailCount)}>Reset</button>
    </div>
  );
}

export default UseStateHooks;
export { UseStateCounter, UseStatePrevStateCounter };
