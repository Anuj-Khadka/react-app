import { combineReducers } from "redux";
import iceCreamReducer from "./icecream/icecream-reducer";
import cakeReducer from "./cake/cake-reducer";
import fetchReducer from "./user/user-reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: fetchReducer
});

export default rootReducer;
