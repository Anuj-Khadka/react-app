import React, { useState } from "react";

function ReactFormHandling() {
  const [user, setUser] = useState();
  const changeUserHandler = (event) => {
    setUser(event.target.value);
  };
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={user}
            onChange={changeUserHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user}
            onChange={changeEmailHandler}
          />
        </div>
        <div>
          <label htmlFor="comment">comment: </label>
          <textarea
            type="text"
            name="comment"
            id="comment"
            value={user}
            onChange={changeCommentHandler}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default ReactFormHandling;
