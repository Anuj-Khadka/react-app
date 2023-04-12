import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cakeReducer from "./cake/cake-reducer";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

// const store = createStore(cakeReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
