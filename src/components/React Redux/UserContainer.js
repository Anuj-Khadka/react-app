import React, { useEffect } from "react";
import { fetchUsers } from "./redux/user/user-actions";
import { connect } from "react-redux";

const UserContainer = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return props.userData.loading ? (
    <h2>loading text</h2>
  ) : props.userData.error ? (
    <h5>{props.userData.error}</h5>
  ) : (
    <div>
      <h2>user list</h2>
      {props.userData &&
        props.userData.users &&
        props.userData.users.map((user) => <p>{user.name}</p>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
