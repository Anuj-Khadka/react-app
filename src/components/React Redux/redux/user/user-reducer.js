import {
  FETCT_USER_FAILURE,
  FETCT_USER_REQUEST,
  FETCT_USER_SUCCESS,
} from "./user-type";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCT_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: ''
      };
    case FETCT_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state
  }
};



export default fetchReducer;