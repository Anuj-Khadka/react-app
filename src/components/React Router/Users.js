import React from "react";
import { useParams, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const showActiveUser = searchParam.get("filter") === "active";
  return (
    <div>
      Users
      <h2>Admin</h2>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <hr />
      <div>
        <button onClick={() => setSearchParam({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParam({})}>Reset Users</button>
      </div>
      {showActiveUser ? (
        <h4>Showing Active Users</h4>
      ) : (
        <h4>Showing All Users</h4>
      )}
    </div>
  );
};

const UserDetails = () => {
  const { userId } = useParams();
  return <div>User detail this is {userId} </div>;
};

const Admin = () => {
  return <div>this is admin</div>;
};

export default Users;
export { UserDetails, Admin };
