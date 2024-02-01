import { product } from "./product";

export type localStorageType = [
  {
    user: { token: string };
  },
  {
    cartItems: product;
    color: string;
  }
];
