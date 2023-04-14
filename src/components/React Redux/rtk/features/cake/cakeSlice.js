import { createSlice } from "@reduxjs/toolkit";
// create slice uses immer library under the hood

const initialState = {
  numOfCakes: 11,
};

const cakeSlice = createSlice({
  // name, intial state and reducer
  name: "cake",
  initialState,
  reducers: {
    // createSlice will auto create action creators by the same name of reducer object's key
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions;
