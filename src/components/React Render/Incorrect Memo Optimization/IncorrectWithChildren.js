import React, { useState } from "react";

const IncorrectWithChildrenParent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Student");
  console.log("incorrect parent memo render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Learner")}>set name</button>
      <IncorrectWithChildrenChild name={name}>
        <strong>Hello</strong>
      </IncorrectWithChildrenChild>
      props.children is always a new reference which cause the chid component to
      always render. therefore, no need to wrap with memo() if the child have
      children.
    </div>
  );
};

const IncorrectWithChildrenChild = ({ children, name }) => {
  console.log("incorrect child memo render");
  return (
    <div>
      {children} {name}
    </div>
  );
};

export default IncorrectWithChildrenParent;
