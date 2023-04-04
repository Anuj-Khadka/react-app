import React, { useState } from "react";

const ReactMemoParent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("new");
  console.log("parent memo render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("hehehe")}>set name</button>
      <MemoChild name={name}/>
    </div>
  );
};

const MemoChild = React.memo(() => {
  console.log("child memo render");
  return <div>child component</div>;
});



export default ReactMemoParent