const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(cakeActions.restocked(2));
// store.dispatch(cakeActions.restocked(1));
// store.dispatch(iceCreamActions.restocked(1));
store.dispatch(fetchUsers());

// unsubscribe();
