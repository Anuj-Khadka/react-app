import React, { useState, useReducer } from "react";

const StateImmutibility = () => {
  return (
    <div>
      StateImmutibility
      <ArrayWithState />
      ReducerImmutibility
      <ObjectWithReducer />
    </div>
  );
};

// useState Example for array mutability

const initialState = ["Anuj", "Khadka"];

const ArrayWithState = () => {
  const [person, setPerson] = useState(initialState);
  const clickHandler = () => {
    // person.push("No");
    // person.push("Name");
    // setPerson(person);

    const newPerson = [...person];
    newPerson.push("No");
    newPerson.push("Name");
    setPerson(newPerson);
  };

  console.log("State Array Render");
  return (
    <div>
      <button onClick={clickHandler}>
        Click &nbsp;
        {person.map((person) => (
          <span key={person}>{person}</span>
        ))}
      </button>
    </div>
  );
};

// useReducer example for object immutibility

const initState = {
  fname: "Anuj",
  lname: "Khadka",
};

const reducer = (state, action) => {
  const newState = { ...state };
  switch (action) {
    case "fname":
      newState.fname = "No";
      return newState;
    case "lname":
      newState.lname = "Name";
      return newState;
    default:
      return state;
  }
};

const ObjectWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  console.log("Object Reducer render");
  return (
    <div>
      <div>
        {state.fname} {state.lname}
      </div>
      <button onClick={() => dispatch("fname")}>First Name</button>
      <button onClick={() => dispatch("lname")}>Last Name</button>
    </div>
  );
};

export default StateImmutibility;
