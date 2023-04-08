// be clear that this file is just a simple JS application and not a react application.
// it is the introduction to Redux
// if didn't work, try running it out of react application.

const redux = require("redux");
const creatingStore = redux.createStore;
const combineReducers = redux.combineReducers;

// action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first redux application",
  };
};
const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

// reducer
/*
const initialState = {
  numOfCakes: 10,
  numOfIceCream: 50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case "BUY_ICECREAM":
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};
*/

// multiple reducers
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCream: 50,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};

// store
// conbine multiple reducers
const rootReducer  = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = creatingStore(rootReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
console.log(store.getState().cake)
unsubscribe();
