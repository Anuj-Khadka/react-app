import { createStore } from "redux";
import cakeReducer from "./cake/cake-reducer";

const store = createStore(cakeReducer);

export default store;
