import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

// to create async action, we use createAsyncThunk action
// it also generates pending, fulfilled and rejected action types
// this thunk makes use of redux-thunk
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      (fetchUsers.pending,
      (state) => {
        state.loading = true;
      })
    );
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };
