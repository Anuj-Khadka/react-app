import React, { useState } from "react";

const IncorrectWithImpureComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Student");
  console.log("incorrect with impure component parent memo render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Learner")}>set name</button>
      <IncorrectWithImpureComponentChild name={name} />
      when you want some constant update on the UI as per the change in the
      state, it is better not to momeoize the component. for example: display
      date or also random number.
    </div>
  );
};

const IncorrectWithImpureComponentChild = React.memo(({ name }) => {
  console.log("incorrect with impure component child memo render");
  const date = new Date();
  return (
    <div>
      Hello {name}. it is currently {date.getHours()}: {date.getMinutes()}:{" "}
      {date.getSeconds()}
    </div>
  );
});

export default IncorrectWithImpureComponent;
