import { storedTokenType } from "../../types/localStorageItem";
import { product } from "../../types/product";

export const addItemToLocalStorage = (item: product[]) => {
  localStorage.setItem("item", JSON.stringify(item));
};

export const getItemFromLocalStorage = () => {
  const result = localStorage.getItem("item");
  const item = result ? JSON.parse(result) : [];
  return item;
};

export const addTokenToLocalStorage = (token: storedTokenType) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  const result = localStorage.getItem("token");
  const token = result ? JSON.parse(result) : null;
  return token;
};

export const addWishlistToLocalStorage = (item: product[]) => {
  localStorage.setItem("wishlist", JSON.stringify(item));
};

export const getWishlistFromLocalStorage = () => {
  const result = localStorage.getItem("wishlist");
  const item = result ? JSON.parse(result) : [];
  return item;
};
