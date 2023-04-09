import { BUY_CAKE } from "./cake-types";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
