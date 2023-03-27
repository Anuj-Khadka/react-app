import React, { useState } from "react";

const UseStateHooks = () => {
  return (
    <div>
      basic useState
      <UseStateCounter />
      <br />
      <br />
      useState with previous state
      <UseStatePrevStateCounter />
      <br />
      <br />
      useState with object
      <UseStateObject />
      <br />
      <br />
      useState with array
      <UseStateArray />
    </div>
  );
};

// basic useState

function UseStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

// useState with previous state
function UseStatePrevStateCounter() {
  const initailCount = 0;
  const [count, setCount] = useState(initailCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      Clicked {count} times
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        add
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        subract
      </button>
      <button onClick={incrementFive}>add 5</button>
      <button onClick={() => setCount(initailCount)}>Reset</button>
    </div>
  );
}

// useState with object

function UseStateObject() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={name.firstName}
          onChange={(e) =>
            setName({
              ...name,
              firstName: e.target.value,
            })
          }
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={name.lastName}
          onChange={(e) =>
            setName({
              ...name,
              lastName: e.target.value,
            })
          }
        />
        <h2>firstname: {name.firstName}</h2>
        <h2>lastname: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

// useState with array

function UseStateArray() {
  const [items, setItems] = useState([]);

  const clickHandler = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={clickHandler}>Clickme</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id} --------- {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateHooks;
export {
  UseStateCounter,
  UseStatePrevStateCounter,
  UseStateObject,
  UseStateArray,
};
