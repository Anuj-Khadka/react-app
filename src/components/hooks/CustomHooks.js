import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
import useCounter from "./useCounter";
import useInput from "./useInput";

function CustomHooks() {
  return (
    <div>
      CustomHooks
      <p>below are few examples of custom hooks</p>
      <br />
      <br />
      useDocumentTitle Hook
      <DocumentTitle />
      <br />
      <br />
      useCounter Hook
      <Counter />
      <br />
      <br />
      useInput Hook
      <InputHook />
    </div>
  );
}

// Update document title

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count - {count}
      </button>
    </div>
  );
};

// useCounter Hook

const Counter = () => {
  const [count, increment, decrement, reset] = useCounter(3, 4);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

// useInput hook

const InputHook = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`hello ${firstName} ${lastName}`);
  };

  return (
    <div>
      input hook
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstname">
            <input {...bindFirstName} placeholder="firstName" />
          </label>
        </div>
        <div>
          <label htmlFor="lastname">
            <input {...bindLastName} placeholder="lastName" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomHooks;
