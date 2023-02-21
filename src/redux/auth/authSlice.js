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

const authSlice = createSlice({
  name: 'auth',
  initialState,

 // extraReducers: builder =>
 //   builder.addCase(registration.fulfilled, userRegistrationSuccessReducer),

  extraReducers: {
    [authOperations.login.pending](state) { state.isRefreshing = true; },
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
    [authOperations.logout.pending](state) { state.isRefreshing = true; },
    [authOperations.logout.fulfilled](state, action) {
      state.isRefreshing = false;
      state.error = null;
      state.user.id = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](state, action) { state.isRefreshing = false; state.error = action.payload; },
    [authOperations.googleApi.fulfilled](state, action) {
      state.isRefreshing = false;
      state.error = null;
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.googleApi.rejected](state, action) { state.isRefreshing = false; state.error = action.payload; },
  },

});

export const authReducer = authSlice.reducer;
