const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCreams: 50,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // link other reducer with this one
  // allows to react to other action-types besides the types it has created.
  // normal method
  // extraReducers: {
  //   ["cake/ordered"]: (state, actions) => {
  //     state.numOfIceCreams--;
  //   },
  // },

  // builder method
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
