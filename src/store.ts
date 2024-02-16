import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modal";
import userSlice from "./features/user";
import filterSlice from "./features/filters";
import orderStepSlice from "./features/orderSteps";
import shippingSlice from "./features/shippingMeans";
import cartSlice from "./features/cart";
import colorSlice from "./features/color";
import orderSlice from "./features/order";
import wishlistSlice from "./features/wishlist";
import profileTabSlice from "./features/profileTap";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    orderStep: orderStepSlice,
    filter: filterSlice,
    user: userSlice,
    shipping: shippingSlice,
    cart: cartSlice,
    color: colorSlice,
    order: orderSlice,
    wishlist: wishlistSlice,
    profileTab: profileTabSlice,
  },
});

export type storeType = ReturnType<typeof store.getState>;

export default store;
