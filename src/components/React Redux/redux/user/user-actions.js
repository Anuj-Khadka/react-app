import axios from "axios";
import {
  FETCT_USER_FAILURE,
  FETCT_USER_REQUEST,
  FETCT_USER_SUCCESS,
} from "./user-type";

export const fetchUsersRequest = () => {
  return {
    type: FETCT_USER_REQUEST,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCT_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCT_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
