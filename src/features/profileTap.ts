import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 1,
};

const profilTapSlice = createSlice({
  name: "profileTab",
  initialState,
  reducers: {
    setActiveTap: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});
export const { setActiveTap } = profilTapSlice.actions;
export default profilTapSlice.reducer;
