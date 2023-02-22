import { createSlice } from '@reduxjs/toolkit';

// import { registration } from './operations';
// import { userRegistrationSuccessReducer } from './reducers';
import authOperations from './operations.js';

const getUser = () => {
  let locUser = { id: null, email: null };
  const user = localStorage.getItem("user");

  if (!user) {
    return locUser;
  }
  locUser = JSON.parse(user);
  return locUser;
}


const initialState = {
  user: getUser(),
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

console.log("reduxAuth initialState =", initialState);

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
