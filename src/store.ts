import { Store, configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modal";
import userSlice from "./features/user";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice,
  },
});

export type storeType = ReturnType<typeof store.getState>;

export default store;
