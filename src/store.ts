import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modal";
import userSlice from "./features/user";
import filterSlice from "./features/filters";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    filter: filterSlice,
    user: userSlice,
  },
});

export type storeType = ReturnType<typeof store.getState>;

export default store;
