import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    chooseColor: (state, action) => {
      state.color = action.payload.selectedColor;
    },
  },
});
export const { chooseColor } = colorSlice.actions;
export default colorSlice.reducer;
