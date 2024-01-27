import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 2,
  completedStep: 2,
};

const orderStepSlice = createSlice({
  name: "orderStep",
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    previousStep: (state) => {
      state.activeStep = state.activeStep - 1;
      if (state.activeStep <= 1) {
        state.activeStep = 1;
      }
    },
    setCompletedStep: (state, action) => {
      state.completedStep = action.payload;
    },
  },
});
export const { setActiveStep, setCompletedStep, previousStep } =
  orderStepSlice.actions;
export default orderStepSlice.reducer;
