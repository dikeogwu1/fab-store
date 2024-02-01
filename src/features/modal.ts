import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  isShopDropDown: false,
  isProductDropDown: false,
  isUserModal: false,
  isMobileNav: false,
  miniCartModal: false,
  searchModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShopDropDown: (state) => {
      if (state.isShopDropDown) {
        state.isShopDropDown = false;
      } else {
        state.isShopDropDown = true;
      }
    },
    closeShopDropDown: (state) => {
      state.isShopDropDown = false;
    },
    toggleProductDropDown: (state) => {
      if (state.isProductDropDown) {
        state.isProductDropDown = false;
      } else {
        state.isProductDropDown = true;
      }
    },
    closeProductDropDown: (state) => {
      state.isProductDropDown = false;
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
    openMiniCartModal: (state) => {
      state.miniCartModal = true;
    },
    closeMiniCartModal: (state) => {
      state.miniCartModal = false;
    },
    openSearchModal: (state) => {
      state.searchModal = true;
    },
    closeSearchModal: (state) => {
      state.searchModal = false;
    },
  },
});
export const {
  openSearchModal,
  closeSearchModal,
  toggleProductDropDown,
  toggleShopDropDown,
  closeProductDropDown,
  closeShopDropDown,
  showModal,
  hideModal,
  toggleUserModal,
  closeUserModal,
  openMiniCartModal,
  closeMiniCartModal,
  openMobileNav,
  closeMobileNav,
} = modalSlice.actions;
export default modalSlice.reducer;
