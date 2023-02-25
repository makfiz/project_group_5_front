import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {
  notiflixOptions,
  notiflixReportOptions,
} from '../../utils/notiflixOptions';

axios.defaults.baseURL = 'https://petssuport4815162342api.onrender.com/api';

const unsetToken = () => {
  return (axios.defaults.headers.common.Authorization = '');
};

const setToken = token => {
  return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};

export const registration = createAsyncThunk(
  '/auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      Notiflix.Notify.success('Success! Now you can login ✔', {
        timeout: 3000,
      });

      return data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 409') {
        Notiflix.Notify.failure('This user is already registered ⚠', {
          timeout: 3000,
        });
      }
      if (error.message === 'Request failed with status code 400') {
        Notiflix.Notify.failure('Not valid format of email or password ⚠', {
          timeout: 3000,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('/auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setToken(data.token);
    Notiflix.Notify.success('Success! Now you are logedin ✔', {
      timeout: 3000,
    });
    return data;
  } catch (error) {
    console.log(error.message);
    if (error.message === 'Request failed with status code 401') {
      Notiflix.Notify.failure(
        'Email, or password is wrong, or email is not verified. Please check your e-mail ⚠',
        {
          timeout: 3000,
        }
      );
    }
    if (error.message === 'Request failed with status code 400') {
      Notiflix.Notify.failure('Not valid format of email or password ⚠', {
        timeout: 3000,
      });
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk('/auth/logout', async () => {
  try {
    await axios.get('/users/logout');
    unsetToken();
  } catch (error) {
    console.log(error);
  }
});

const googleApi = createAsyncThunk('auth/google', async credentials => {
  try {
    setToken(credentials.token);
    Notiflix.Notify.success('Success! Login and password have been sent to your email ✔', {
        timeout: 3000,
      });
    return credentials;
  } catch (error) {
    console.log(error);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null || '') {
    return thunkAPI.rejectWithValue('unauthorized access');
  }
  try {
    setToken(persistedToken);
    const response = await axios.get('/users/me');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userUpdate = createAsyncThunk(
  '/auth/userUpdate',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/update', credentials);
      Notiflix.Notify.success('Success! User updated! ✔', {
        timeout: 3000,
      });

      return data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 404') {
        Notiflix.Notify.failure('User not found. Please register user! ⚠', {
          timeout: 3000,
        });
      }
      if (error.message === 'Request failed with status code 401') {
        Notiflix.Notify.failure(
          'jwt token is expired or not valid. Please login user! ⚠',
          {
            timeout: 3000,
          }
        );
      }
      if (error.message === 'Request failed with status code 400') {
        Notiflix.Notify.failure(
          'Not valid format of request body (check types of yuor request data) ⚠',
          {
            timeout: 3000,
          }
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userUpload = createAsyncThunk(
  '/auth/userUpload',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/upload', credentials);
      Notiflix.Notify.success('Success! User updated! ✔', {
        timeout: 3000,
      });

      return data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 404') {
        Notiflix.Notify.failure('User not found. Please register user! ⚠', {
          timeout: 3000,
        });
      }
      if (error.message === 'Request failed with status code 401') {
        Notiflix.Notify.failure(
          'jwt token is expired or not valid. Please login user! ⚠',
          {
            timeout: 3000,
          }
        );
      }
      if (error.message === 'Request failed with status code 400') {
        Notiflix.Notify.failure(
          'Not valid format of request body (check types of yuor request data) ⚠',
          {
            timeout: 3000,
          }
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const againVerifyMail = createAsyncThunk(
  '/auth/againVerifyMail',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/verify', credentials);
      Notiflix.Notify.success('Verification email sent! ✔', {
        timeout: 3000,
      });

      return data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 404') {
        Notiflix.Notify.failure('User not found. Please register user! ⚠', {
          timeout: 3000,
        });
      }
      if (error.message === 'Request failed with status code 400') {
        Notiflix.Notify.failure(
          'Verification has already been passed, or request body missing required field email! ⚠',
          {
            timeout: 3000,
          }
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  logout,
  login,
  googleApi,
  registration,
  refresh,
  userUpdate,
  userUpload,
  againVerifyMail,
};

export default authOperations;
