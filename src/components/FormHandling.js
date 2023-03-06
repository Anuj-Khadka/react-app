import React, { useState } from "react";

function ReactFormHandling() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();
  const changeUserHandler = (event) => {
    setUser(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changeCommentHandler = (event) => {
    setComment(event.target.value);
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
            value={email}
            onChange={changeEmailHandler}
          />
        </div>
        <div>
          <label htmlFor="comment">comment: </label>
          <textarea
            type="text"
            name="comment"
            id="comment"
            value={comment}
            onChange={changeCommentHandler}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default ReactFormHandling;
