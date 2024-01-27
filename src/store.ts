import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modal";
import userSlice from "./features/user";
import filterSlice from "./features/filters";
import orderStepSlice from "./features/orderSteps";
import shippingSlice from "./features/shippingMeans";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    orderStep: orderStepSlice,
    filter: filterSlice,
    user: userSlice,
    shipping: shippingSlice,
  },
});

export type storeType = ReturnType<typeof store.getState>;

export default store;
