import React, { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("render parent usestate");
  return (
    <div>
      <h2>Render Parent useState</h2>
      <p>
        parent component render, react will recursiely render its child
        components
      </p>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setCount(0)}> Count to 0</button>
      <button onClick={() => setCount(5)}> Count to 5</button>
      <div>
        button click = parent component re-render = child component re-render
        <br />
        <i>DOM represened child component will not be updated though</i>
      </div>
      <Child />
    </div>
  );
};

const Child = () => {
  console.log("child render");
  return <div>Child component</div>;
};

export default Parent;
