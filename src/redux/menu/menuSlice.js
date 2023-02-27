import { createSlice } from '@reduxjs/toolkit';

const isMenuOpenSlice = createSlice({
  name: 'openMenu',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    openMenu(state, _) {
      state.isMenuOpen = true;
    },
    closeMenu(state, _) {
      state.isMenuOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = isMenuOpenSlice.actions;
export const toggleMenuReducer = isMenuOpenSlice.reducer;
