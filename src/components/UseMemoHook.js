import React, { useState } from "react";

function UseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((counterOne) => counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo((counterTwo) => counterTwo + 1);
  };
  const isEven = () => {
    let i = 0;
    while (i < 2000) {
      console.log(i);
      i++;
    }
    return counterOne % 2 === 0;
  };
  return (
    <div>
      <div>
        <button onClick={incrementOne}>counterOne - {counterOne}</button>
        <span>{isEven() ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>counterTwo - {counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemoHook;
