import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  firstName: "",
  lastName: "",
  displayName: "",
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
      localStorage.removeItem("token");
    },
    setCurrentUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.displayName = action.payload.displayName;
    },
  },
});
export const { userLogin, userLogout, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
