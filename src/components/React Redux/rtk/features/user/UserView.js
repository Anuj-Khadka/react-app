import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers);
  }, []);
  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>loading..</div>}
      {!user.loading && user.error ? <div>error: {user.error}</div> : null}
      {!user.loading && user.user.length ? (
        <ul>
          {user.user.map((user) => {
            <li key={user.id}>{user}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
