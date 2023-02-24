import React from "react";

const user = (userName) => {
  return userName.toLowerCase() === "anuj" ? "yes" : "no";
};

function Hello() {
  return (
    <>
      <h1 className="title" style={{ color: "red" }}>
        Welcome!
      </h1>
      <p>Today we are just revising what we have learnt yesterday.</p>
      <p>{user("anUj")}</p>
    </>

    // the react way  (raw react code)
    // React.createElement(
    //     'div',
    //     {id: 'old-way', className:'older-way'},
    //     React.createElement(
    //         'h1',
    //         null,
    //         'Welcome!'
    //     )
    //     )
  );
}

export default Hello;
