import { BUY_ICECREAM } from "./icecream-type";

const initialState = {
  numOfIceCream: 50,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
