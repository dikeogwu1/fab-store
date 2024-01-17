import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  isAlert: false,
  isUserModal: false,
  isMobileNav: false,
  emailModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showAlert: (state) => {
      state.isAlert = true;
    },
    hideAlert: (state) => {
      state.isAlert = false;
    },
    openMobileNav: (state) => {
      state.isMobileNav = true;
    },
    closeMobileNav: (state) => {
      state.isMobileNav = false;
    },
    showModal: (state) => {
      state.isModal = true;
    },
    hideModal: (state) => {
      state.isModal = false;
    },
    toggleUserModal: (state) => {
      if (state.isUserModal === true) {
        state.isUserModal = false;
      } else {
        state.isUserModal = true;
      }
    },
    closeUserModal: (state) => {
      state.isUserModal = false;
    },
    openEmailModal: (state) => {
      state.emailModal = true;
    },
    closeEmailModal: (state) => {
      state.emailModal = false;
    },
  },
});
export const {
  showAlert,
  hideAlert,
  showModal,
  hideModal,
  toggleUserModal,
  closeUserModal,
  openEmailModal,
  closeEmailModal,
  openMobileNav,
  closeMobileNav,
} = modalSlice.actions;
export default modalSlice.reducer;
