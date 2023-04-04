import React, { useState } from "react";

const SolvingPropReference = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Student");

  const person = {
    fname: "Anuj",
    lname: "Khadka",
  };

  console.log("incorrect with impure component parent memo render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Learner")}>set name</button>
      <SolvingPropReferenceChild name={name} person={person} />
      when the parent component is passing down a non-primitive datatype i.e.
      object, array, function etc, a new reference is created everytime the
      parent component renders. therefore, memoization doesn't work as expected.
    </div>
  );
};

const SolvingPropReferenceChild = React.memo(({ name, person }) => {
  console.log("incorrect with impure component child memo render");
  return (
    <div>
      Hello {name}. {person.fname} {person.lname}
    </div>
  );
});

export default SolvingPropReference;
