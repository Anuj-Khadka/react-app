import { combineReducers } from "redux";
import iceCreamReducer from "./icecream/icecream-reducer";
import cakeReducer from "./cake/cake-reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
