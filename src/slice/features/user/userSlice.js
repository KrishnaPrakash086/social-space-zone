/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  uid: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name =
        action.payload.displayName || action.payload.email.split("@")[0];
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.username = action.payload.username;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
