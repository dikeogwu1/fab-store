import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    currentUser: (state, action) => {
      state.userName = action.payload;
    },
  },
});
export const { userLogin, userLogout, startLoading, stopLoading, currentUser } =
  userSlice.actions;
export default userSlice.reducer;
