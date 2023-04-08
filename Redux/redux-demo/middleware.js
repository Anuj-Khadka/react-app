const redux = require("redux");
const creatingStore = redux.createStore;
const combineReducers = redux.combineReducers;

// apply middleware
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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

// store
const store = creatingStore(reducer, applyMiddleware(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
console.log(store.getState().cake);
unsubscribe();
