const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Anuj",
  age: 17,
  address: {
    street: "Deurali",
    city: "Dhankuta",
    state: "Koshi",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      // immer library
      return produce(state, (draft) => {
        draft.address.sreet = action.payload;
      });

    default:
      state;
  }
};

const store = redux.createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated store", store.getState());
});
store.dispatch(updateStreet("Chaubise"));
unsubscribe();
