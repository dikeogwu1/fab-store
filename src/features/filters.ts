import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBy: "",
  filterName: "",
  priceRange: "",
  selectedName: "",
  selectedPrice: "All Prices",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterProduct: (state, action) => {
      state.filterBy = action.payload.filterBy;
      state.filterName = action.payload.filterName;
    },
    setPriceArange: (state, action) => {
      state.priceRange = action.payload.range;
    },
    setFilterName: (state, action) => {
      state.selectedName = action.payload.name;
    },
    setFilterPrice: (state, action) => {
      state.selectedPrice = action.payload.price;
    },
  },
});
export const { filterProduct, setFilterName, setFilterPrice, setPriceArange } =
  filterSlice.actions;
export default filterSlice.reducer;
