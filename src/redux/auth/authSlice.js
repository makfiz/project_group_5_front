import { createSlice } from '@reduxjs/toolkit';
import { registration } from './operations';

import { userRegistrationSuccessReducer } from './reducers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder.addCase(registration.fulfilled, userRegistrationSuccessReducer),
});

export const authReducer = authSlice.reducer;
