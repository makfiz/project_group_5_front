import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { endPoints } from 'constants/EndPoints';
// import toast from 'react-hot-toast';

// axios.defaults.baseURL = endPoints.baseUrl;
axios.defaults.baseURL = 'https://petssuport4815162342api.onrender.com/';

// TODO: Clear token and header auth
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWYzYWI3NzY0ZGY2ZjY3MmZkYzdjYyIsImlhdCI6MTY3NzA1NDIyOCwiZXhwIjoxNjc3MTQwNjI4fQ.bCfojHPVppZABKzy-wyDyEHXo7Q8yWCaV_GqzyXy7HA';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBkNDA2YmRkOWEyMDA1MTY2OGIzNyIsImlhdCI6MTY3NjczMDMwNCwiZXhwIjoxNjc2ODE2NzA0fQ.Pb19eVa9jjBiWkLdC0L3ejeJPDXS53FXxtNZV3h-y-Y';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
setAuthHeader(token);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchCategory',
  async ({ path, params, controller }, thunkAPI) => {
    try {
      const response = await axios.get(path, {
        signal: controller.signal,
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavorites',
  async ({ path, params, controller }, thunkAPI) => {
    try {
      const response = await axios.get(path, {
        signal: controller.signal,
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnNotices = createAsyncThunk(
  'notices/fetchOwn',
  async ({ path, params, controller }, thunkAPI) => {
    try {
      const response = await axios.get(path, {
        signal: controller.signal,
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
  async ({ path }, thunkAPI) => {
    try {
      const response = await axios.post(path);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeNoticeFromFavorite = createAsyncThunk(
  'notices/removeFavorite',
  async ({ path }, thunkAPI) => {
    try {
      const response = await axios.delete(path);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOnFavoritePage = createAsyncThunk(
  'notices/deleteFromFavPage',
  async ({ path }, thunkAPI) => {
    try {
      const response = await axios.delete(path);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOwnNotice = createAsyncThunk(
  'notices/deleteOwn',
  async ({ path }, thunkAPI) => {
    try {
      const response = await axios.delete(path);
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
