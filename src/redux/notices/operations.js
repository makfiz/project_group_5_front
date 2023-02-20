import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { endPoints } from 'constants/EndPoints';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = endPoints.baseUrl;

// TODO: Clear token and header auth
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWYzYWI3NzY0ZGY2ZjY3MmZkYzdjYyIsImlhdCI6MTY3Njg4MTE3OCwiZXhwIjoxNjc2OTY3NTc4fQ.6CaC_Ge7zElFHSaCw7M9WLaJgZDNMNaeFYFVk21rpH0';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
setAuthHeader(token);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchCategory',
  async ({ path, params }, thunkAPI) => {
    try {
      const response = await axios.get(path, {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNoticeToFavorite = createAsyncThunk(
  'notices/addFavorite',
  async ({ path, params }, thunkAPI) => {
    try {
      const response = await axios.post(path, { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeNoticeFromFavorite = createAsyncThunk(
  'notices/removeFavorite',
  async ({ path, params }, thunkAPI) => {
    try {
      const response = await axios.delete(path, { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//   // Utility to remove JWT
//   const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
//   };

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       //   toast.success('Contact added successfully');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
