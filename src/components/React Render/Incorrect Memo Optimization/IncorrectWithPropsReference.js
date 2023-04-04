import React, { useMemo, useState, useCallback } from "react";

const IncorrectWithPropsReference = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Student");

  const person = {
    fname: "Anuj",
    lname: "Khadka",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandler = useCallback(handleClick, []);

  console.log("incorrect with impure component parent memo render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Learner")}>set name</button>
      <IncorrectWithPropsReferenceChild name={name} person={memoizedPerson} />
      {/* <IncorrectWithPropsReferenceChild name={name} handleClick={memoizedHandler} /> */}
      <br/>
      when the parent component is passing down a non-primitive datatype i.e.
      object, array, function etc, a new reference is created everytime the
      parent component renders. therefore, memoization doesn't work as expected.
      <br />
      To address the problem, we have useMemo and useCallback to save the
      datatype only once so that the child component doesn't render
      unnecessarily.
    </div>
  );
};

const IncorrectWithPropsReferenceChild = React.memo(
  ({ name, person, handleClick }) => {
    console.log("incorrect with impure component child memo render");
    return (
      <div>
        Hello {name}. {person.fname} {person.lname}
      </div>
    );
  }
);

export default IncorrectWithPropsReference;
