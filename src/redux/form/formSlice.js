import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    isSending: false,
    showRegisterForm: true,
    showRegisterMethod: true,
    isModalOpen: false,
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
    closeModal(state, _) {
      state.isModalOpen = false;
    },
    openModal(state, _) {
      state.isModalOpen = true;
    },
  },
});

export const {
  sendingEmail,
  hideForm,
  closeForm,
  showForm,
  closeRegisterMethod,
  closeModal,
  openModal,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
