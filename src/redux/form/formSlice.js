import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    isSending: false,
    showRegisterForm: true,
    showRegisterMethod: true,
  },
  reducers: {
    sendingEmail(state, _) {
      state.isSending = true;
    },
    hideForm(state, _) {
      state.showRegisterForm = false;
    },
    showForm(state, _) {
      state.showRegisterForm = true;
    },
    closeForm(state, _) {
      state.showRegisterForm = false;
      state.isSending = false;
    },
    closeRegisterMethod(state, _) {
      state.showRegisterForm = false;
    },
  },
});

export const {
  sendingEmail,
  hideForm,
  closeForm,
  showForm,
  closeRegisterMethod,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
