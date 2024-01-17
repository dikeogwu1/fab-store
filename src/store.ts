import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modal";
import userSlice from "./features/user";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice,
  },
});

export default store;
