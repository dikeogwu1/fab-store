import { localStorageType } from "../../types/localStorageItem";

export const addItemToLocalStorage = (item: localStorageType) => {
  localStorage.setItem("item", JSON.stringify(item));
};

export const getItemFromLocalStorage = () => {
  const result = localStorage.getItem("item");
  const item = result ? JSON.parse(result) : null;
  return item;
};
