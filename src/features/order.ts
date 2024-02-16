import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientSecretKey: "",
  orderId: "",
  isloading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    newClientSecret: (state, action) => {
      state.clientSecretKey = action.payload.secret;
    },
    setOrderId: (state, action) => {
      state.orderId = action.payload.orderId;
    },
    setIsLoading: (state, action) => {
      state.isloading = action.payload;
    },
  },
});
export const { newClientSecret, setOrderId, setIsLoading } = orderSlice.actions;
export default orderSlice.reducer;
