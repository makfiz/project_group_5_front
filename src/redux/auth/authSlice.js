import { createSlice } from '@reduxjs/toolkit';

import { registration } from './operations';
import { userRegistrationSuccessReducer } from './reducers';
import { login, logout } from './operations.js';

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
    [login.pending](state) { state.isRefreshing = true; },
    [login.fulfilled](state, action) { state.isRefreshing = false; state.error = null; state.user.id = action.payload.id; state.user.email = action.payload.email; state.token = action.payload.token; state.isLoggedIn = true; },
    [login.rejected](state, action) { state.isRefreshing = false; state.error = action.payload; },
    [logout.pending](state) { state.isRefreshing = true; },
    [logout.fulfilled](state, action) { state.isRefreshing = false; state.error = null; state.user.id = null; state.user.email = null; state.token = null; state.isLoggedIn = false; },
    [logout.rejected](state, action) { state.isRefreshing = false; state.error = action.payload; },
  },

});

export const authReducer = authSlice.reducer;
