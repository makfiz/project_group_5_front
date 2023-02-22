import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

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


const login = createAsyncThunk('auth/login', async ({ params }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', params);
      setToken(data.token);
      Notiflix.Notify.success('Welcome ✔', {
        timeout: 2500,
      });
      // const locData = { id: data.id, email: data.email };
      // localStorage.setItem("userPetly", JSON.stringify(locData));
      return data;
    } catch (error) {
      // unsetToken();
      // console.log(error);
      Notiflix.Notify.failure('Wrong login or password❗  Or email is not confirm, please check your email to confirm', {
        timeout: 2500,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
});

const logout = createAsyncThunk('auth/logout', async () => {
    try {
      await axios.get('/users/logout');
      unsetToken();
      // localStorage.setItem("userPetly", JSON.stringify(""));
    } catch (error) {
        console.log(error);
    }
});

const googleApi = createAsyncThunk('auth/google', async  (credentials) => {
  try {
    setToken(credentials.token);
    // const locData = { id: credentials.id, email: credentials.email };
    // localStorage.setItem("userPetly", JSON.stringify(locData));
    return credentials;
  } catch (error) {
    console.log(error);
  }
});

const register = createAsyncThunk('auth/register', async ({ params }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', params);
      // setToken(data.token);
      Notiflix.Notify.success('Please check your email to confirm!', {
        timeout: 2500,
      });
      // const locData = { id: data.id, email: data.email };
      // localStorage.setItem("userPetly", JSON.stringify(locData));
      return data;
    } catch (error) {
      // unsetToken();
      // console.log(error);
      Notiflix.Notify.failure('Email allready in use❗', {
        timeout: 2500,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
});

const authOperations = {
  logout,
  login,
  googleApi,
  register,
};

export default authOperations;



