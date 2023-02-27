import { createSlice } from '@reduxjs/toolkit';

const isMenuOpenSlice = createSlice({
  name: 'openMenu',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu(state, _) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = isMenuOpenSlice.actions;
export const toggleMenuReducer = isMenuOpenSlice.reducer;
