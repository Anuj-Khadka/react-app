import React, { useCallback, useState } from "react";

const Title = React.memo(() => {
  console.log("rendering title");
  return (
    <div>
      <h2>UseCallback Hook</h2>
    </div>
  );
});

const Count = React.memo(({ text, count }) => {
  console.log(`rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
});

const Button = React.memo(({ text, clickHandler, children }) => {
  console.log(`Rendering button - ${text}`);
  return <button onClick={clickHandler}>{children}</button>;
});

function UseCallbackHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const ageIncrement = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const salaryIncrement = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text={"age"} count={age} />
      <Button text={"age"} clickHandler={ageIncrement}>
        Age Increment
      </Button>
      <Count text={"salary"} count={salary} />
      <Button text={"salary"} clickHandler={salaryIncrement}>
        Salary Increment
      </Button>
    </div>
  );
}

export default UseCallbackHook;
