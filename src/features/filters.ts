import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBy: "",
  filterName: "",
  pricesGreaterThan: 0,
  pricesLessThan: "",
  selectedName: "",
  selectedPrice: "All Prices",
  limit: 9,
  searchName: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterProduct: (state, action) => {
      state.filterBy = action.payload.filterBy;
      state.filterName = action.payload.filterName;
    },
    setDispayedFilter: (state, action) => {
      state.filterName = action.payload.filterName;
    },
    setPriceGreaterThan: (state, action) => {
      state.pricesGreaterThan = action.payload.greaterThan;
    },
    setPriceLessThan: (state, action) => {
      state.pricesLessThan = action.payload.lessThan;
    },
    setFilterName: (state, action) => {
      state.selectedName = action.payload.name;
    },
    setFilterPrice: (state, action) => {
      state.selectedPrice = action.payload.price;
    },
    showMoreProducts: (state, action) => {
      state.limit = state.limit + action.payload;
    },
    searchByName: (state, action) => {
      state.searchName = action.payload;
    },
  },
});
export const {
  filterProduct,
  setFilterName,
  setFilterPrice,
  setPriceGreaterThan,
  setPriceLessThan,
  setDispayedFilter,
  showMoreProducts,
  searchByName,
} = filterSlice.actions;
export default filterSlice.reducer;
