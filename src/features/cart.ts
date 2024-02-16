import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToLocalStorage,
  getItemFromLocalStorage,
} from "../utils/functions/localStorage";

const initialState = {
  cart: getItemFromLocalStorage(),
  itemColor: "",
  subTotal: 0,
  total: 0,
  shippingFee: 0,
  isCoupon: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShippingFee: (state, action) => {
      state.shippingFee = action.payload.fee;
    },
    addToCart: (state) => {
      state.cart = getItemFromLocalStorage();
    },
    setSubtotal: (state, action) => {
      state.subTotal = action.payload.subTotal;
    },
    setTotal: (state, action) => {
      state.total = action.payload.total;
    },
    setItemColor: (state, action) => {
      state.itemColor = action.payload.color;
    },
    increaseQuantity: (state, action) => {
      const items = state.cart.map((item: any) => {
        if (
          item._id === action.payload.id &&
          item.color === action.payload.color
        ) {
          item.quantity++;
        }
        return item;
      });
      addItemToLocalStorage(items);
      state.cart = getItemFromLocalStorage();
    },
    decreaseQuantity: (state, action) => {
      const items = state.cart.map((item: any) => {
        if (
          item._id === action.payload.id &&
          item.color === action.payload.color
        ) {
          item.quantity--;
        }
        return item;
      });
      addItemToLocalStorage(items);
      state.cart = getItemFromLocalStorage();
    },
    deleteItem: (state, action) => {
      const items = state.cart.filter((item: any) => {
        return (
          item._id + item.color !== action.payload.id + action.payload.color
        );
      });
      addItemToLocalStorage(items);
      state.cart = getItemFromLocalStorage();
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item: any) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.subTotal = total;
      if (state.isCoupon) {
        state.total = total + state.shippingFee - 25;
      } else {
        state.total = total + state.shippingFee;
      }
    },
    changeTotal: (state, action) => {
      state.total = action.payload;
    },
    useCoupon: (state) => {
      state.isCoupon = true;
    },
    clearCart: (state) => {
      addItemToLocalStorage([]);
      state.cart = getItemFromLocalStorage();
    },
  },
});
export const {
  setShippingFee,
  addToCart,
  setSubtotal,
  setTotal,
  setItemColor,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  calculateTotal,
  changeTotal,
  useCoupon,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
