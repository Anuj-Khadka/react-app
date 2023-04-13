// be clear that this file is just a simple JS application and not a react application.
// it is the introduction to Redux
// if didn't work, try running it out of react application.

const redux = require("redux");
const creatingStore = redux.createStore;
const combineReducers = redux.combineReducers;
const bindactionCreators = redux.bindActionCreators

// action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first redux application",
  };
};
const restockCake = (qty=1) => {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
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

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case RESTOCK_CAKE:
      return { ...state, numOfCakes: state.numOfCakes + action.payload};
    case "BUY_ICECREAM":
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};
*/

// multiple reducers
// /*
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
// */

// store
// conbine multiple reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = creatingStore(rootReducer);

// bindActionCreators
/*
const action = bindactionCreators({buyCake, restockCake}, store.dispatch)
action.buyCake()
action.buyCake()
action.buyCake()
action.restockCake()
*/

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
store.dispatch(restockCake(2));
store.dispatch(buyCake());
console.log(store.getState().cake);
unsubscribe();

