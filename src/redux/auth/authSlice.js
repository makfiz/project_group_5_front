import { createSlice } from '@reduxjs/toolkit';

// import { registration } from './operations';
// import { userRegistrationSuccessReducer } from './reducers';
import authOperations from './operations.js';

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

  // extraReducers: builder =>
  //   builder.addCase(registration.fulfilled, userRegistrationSuccessReducer),

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
      // const { id, email, name, avatarURL, birthday, phone, city } =
      //   action.payload.data.user;
      // state.user = { id, email, name, avatarURL, birthday, phone, city };
      // state.user.petList = action.payload.data.petList;
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
  },
});

export const authReducer = authSlice.reducer;
