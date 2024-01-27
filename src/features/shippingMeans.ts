import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  freeShipping: false,
  expressShipping: false,
  pickUp: false,
};

const shippingSlice = createSlice({
  name: "orderStep",
  initialState,
  reducers: {
    chooseShipping: (state, action) => {
      if (action.payload === "expressShipping") {
        state.expressShipping = true;
        state.freeShipping = false;
        state.pickUp = false;
      } else if (action.payload === "pickUp") {
        state.pickUp = true;
        state.expressShipping = false;
        state.freeShipping = false;
      } else {
        state.freeShipping = true;
        state.pickUp = false;
        state.expressShipping = false;
      }
    },
  },
});
export const { chooseShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
