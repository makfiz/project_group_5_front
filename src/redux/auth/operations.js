import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petssuport4815162342api.onrender.com/api';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const registration = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('users/google', credentials);

//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

const unsetToken = () => {
  return (axios.defaults.headers.common.Authorization = '');
};

const setToken = token => {
  return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setToken(data.token);
    const locData = { id: data.id, email: data.email };
    localStorage.setItem('user', JSON.stringify(locData));
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/users/logout');
    unsetToken();
    localStorage.setItem('user', JSON.stringify(''));
  } catch (error) {
    console.log(error);
  }
});

const googleApi = createAsyncThunk('auth/google', async credentials => {
  try {
    setToken(credentials.token);
    const locData = { id: credentials.id, email: credentials.email };
    localStorage.setItem('user', JSON.stringify(locData));
    return credentials;
  } catch (error) {
    console.log(error);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  console.log(persistedToken);
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('unauthorized access');
  }
  try {
    setToken(persistedToken);
    const response = await axios.get('/users/me');
    return response;
    console.log(response);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authOperations = {
  logout,
  login,
  googleApi,
  refresh,
};

export default authOperations;
