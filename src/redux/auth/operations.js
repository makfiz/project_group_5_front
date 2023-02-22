import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://petssuport4815162342api.onrender.com/api';



// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

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
        timeout: 2500,
      });

      return data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 409') {
        Notiflix.Notify.failure('This user is already registered ⚠', {
          timeout: 2500,
        });
      };
      if (error.message === 'Request failed with status code 400') {
        Notiflix.Notify.failure('Not valid format of email or password ⚠', {
          timeout: 2500,
        });
      };
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('/auth/login', async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setToken(data.token);
      Notiflix.Notify.success('Success! Now you are logedin ✔', {
        timeout: 2500,
      });
      return data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 401') {
        Notiflix.Notify.failure('Email, or password is wrong, or email is not verified. Please check your e-mail ⚠', {
          timeout: 2500,
        });
      };
      if (error.message === 'Request failed with status code 400') {
        Notiflix.Notify.failure('Not valid format of email or password ⚠', {
          timeout: 2500,
        });
      };
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

const googleApi = createAsyncThunk('auth/google', async  (credentials) => {
  try {
    setToken(credentials.token);
    return credentials;
  } catch (error) {
    console.log(error);
  }
});

const authOperations = {
  logout,
  login,
  googleApi,
  registration,
};

export default authOperations;



