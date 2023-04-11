import React, { useState, useEffect, useRef } from "react";

function UseRefHook() {
  return (
    <div>
      basic of useRef - reference to a DOM node
      <UseRefBasic />
      <br />
      <br />
      <br />
      additional usage - store mutable value
      <UseRefCounter />
    </div>
  );
}

// basic example

const UseRefBasic = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      autofocus: &nbsp;
      <input type="text" ref={inputRef} />
    </div>
  );
};

// some nice tricks with useRef

const UseRefCounter = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      useRef Timer - {timer}
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Timer
      </button>
    </div>
  );
};

export default UseRefHook;
