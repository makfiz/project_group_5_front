import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations.js';
import petsOperations from '../Pets/petsOperations.js';

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    avatarURL: null,
    birthday: null,
    phone: null,
    city: null,
    petList: null,
    isLoading: false,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  currentUser: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authOperations.login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.user.id = action.payload.id;
        state.user.email = action.payload.email;
        state.user.name = null;
        state.user.avatarURL = null;
        state.user.birthday = null;
        state.user.phone = null;
        state.user.city = null;
        state.user.petList = null;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.login.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(authOperations.logout.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.logout.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
        state.user.id = null;
        state.user.email = null;
        state.user.name = null;
        state.user.avatarURL = null;
        state.user.birthday = null;
        state.user.phone = null;
        state.user.city = null;
        state.user.petList = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logout.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(authOperations.registration.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.registration.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.user.id = action.payload.id;
        state.user.email = action.payload.email;
        state.user.name = null;
        state.user.avatarURL = null;
        state.user.birthday = null;
        state.user.phone = null;
        state.user.city = null;
        state.user.petList = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.registration.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(authOperations.googleApi.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(authOperations.googleApi.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.user.id = action.payload.id;
        state.user.email = action.payload.email;
        state.user.name = null;
        state.user.avatarURL = null;
        state.user.birthday = null;
        state.user.phone = null;
        state.user.city = null;
        state.user.petList = null;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.user.petList = action.payload.petList;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.refresh.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(authOperations.refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.userUpdate.fulfilled, (state, action) => {
        state.error = null;
        state.user.id = action.payload._id;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.avatarURL = action.payload.avatarURL;
        state.user.birthday = action.payload.birthday;
        state.user.phone = action.payload.phone;
        state.user.city = action.payload.city;
      })
      .addCase(authOperations.userUpdate.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(petsOperations.addPet.fulfilled, (state, action) => {
        state.user.petList = [...state.user.petList, action.payload.myNewPet];
        isLoading = false;
      })
      .addCase(petsOperations.updatePetImage.fulfilled, (state, action) => {
        const index = state.user.petList.findIndex(
          pet => pet._id === action.payload.id
        );
        state.user.petList[index].petImage = action.payload.petImage;
        isLoading = false;
      })
      .addCase(petsOperations.deletePet.fulfilled, (state, action) => {
        const index = state.user.petList.findIndex(
          pet => pet._id === action.payload._id
        );
        state.user.petList.splice(index, 1);
        isLoading = false;
      })
      .addCase(authOperations.userUpload.fulfilled, (state, action) => {
        state.error = null;
        state.user.id = action.payload._id;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.avatarURL = action.payload.avatarURL;
        state.user.birthday = action.payload.birthday;
        state.user.phone = action.payload.phone;
        state.user.city = action.payload.city;
      })
      .addCase(authOperations.userUpload.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(authOperations.againVerifyMail.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.againVerifyMail.fulfilled, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(authOperations.againVerifyMail.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(petsOperations.deletePet.pending, (state, action) => {
        isLoading = true;
      });
  },
});

export const authReducer = authSlice.reducer;
