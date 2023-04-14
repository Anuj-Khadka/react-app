import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";


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
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const {ordered, restocked} = iceCreamSlice.actions;
