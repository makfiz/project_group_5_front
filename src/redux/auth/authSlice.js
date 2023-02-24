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
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  currentUser: [],
};

console.log('reduxAuth initialState =', initialState);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.login.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.login.fulfilled](state, action) {
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
    },
    [authOperations.login.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.logout.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.logout.fulfilled](state, action) {
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
    },
    [authOperations.logout.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.registration.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.registration.fulfilled](state, action) {
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
    },
    [authOperations.registration.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.googleApi.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.googleApi.fulfilled](state, action) {
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
    },
    [authOperations.refresh.fulfilled](state, action) {
      state.user = action.payload.user;
      state.user.petList = action.payload.petList;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refresh.rejected](state) {
      state.isRefreshing = false;
    },
    [authOperations.refresh.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.userUpdate.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.userUpdate.fulfilled](state, action) {
      state.isRefreshing = false;
      state.error = null;
      state.user.id = action.payload._id;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.avatarURL = action.payload.avatarURL;
      state.user.birthday = action.payload.birthday;
      state.user.phone = action.payload.phone;
      state.user.city = action.payload.city;
    },
    [authOperations.userUpdate.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [petsOperations.addPet.fulfilled](state, action) {
      state.user.petList = [...state.user.petList, action.payload.myNewPet];
    },
    [petsOperations.updatePetImage.fulfilled](state, action) {
      const index = state.user.petList.findIndex(
        pet => pet._id === action.payload.id
      );
      state.user.petList[index].petImage = action.payload.petImage;
    },
    [petsOperations.deletePet.fulfilled](state, action) {
      const index = state.user.petList.findIndex(
        pet => pet._id === action.payload._id
      );
      state.user.petList.splice(index, 1);
    },
    [authOperations.userUpload.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.userUpload.fulfilled](state, action) {
      state.isRefreshing = false;
      state.error = null;
      state.user.id = action.payload._id;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.avatarURL = action.payload.avatarURL;
      state.user.birthday = action.payload.birthday;
      state.user.phone = action.payload.phone;
      state.user.city = action.payload.city;
    },
    [authOperations.userUpload.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.againVerifyMail.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.againVerifyMail.fulfilled](state, action) {
      state.isRefreshing = false;
    },
    [authOperations.againVerifyMail.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
