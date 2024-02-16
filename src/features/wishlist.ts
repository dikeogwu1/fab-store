import { createSlice } from "@reduxjs/toolkit";
import {
  addWishlistToLocalStorage,
  getWishlistFromLocalStorage,
} from "../utils/functions/localStorage";

const initialState = {
  wishlist: getWishlistFromLocalStorage(),
};

const wishlisSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state) => {
      state.wishlist = getWishlistFromLocalStorage();
    },
    deleteWishlist: (state, action) => {
      const items = state.wishlist.filter((item: any) => {
        return (
          item._id + item.color !== action.payload.id + action.payload.color
        );
      });
      addWishlistToLocalStorage(items);
      state.wishlist = getWishlistFromLocalStorage();
    },
  },
});
export const { addToWishlist, deleteWishlist } = wishlisSlice.actions;
export default wishlisSlice.reducer;
