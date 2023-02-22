import { createSlice } from '@reduxjs/toolkit';

// import { registration } from './operations';
// import { userRegistrationSuccessReducer } from './reducers';
import authOperations from './operations.js';

const initialState = {
  user: { id: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
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
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.googleApi.fulfilled](state, action) {
      state.isRefreshing = false;
      state.error = null;
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.registration.pending](state) { state.isRefreshing = true; },
    [authOperations.registration.fulfilled](state, action) {
      state.isRefreshing = false;
      state.error = null;
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
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
    [authOperations.refresh.fulfilled](state, action) {
      const { id, email } = action.payload.data.user;
      state.user = { id, email };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refresh.rejected](state) {
      state.isRefreshing = false;
    },
    [authOperations.refresh.pending](state) {
      state.isRefreshing = true;
    },
  },
});

export const authReducer = authSlice.reducer;
