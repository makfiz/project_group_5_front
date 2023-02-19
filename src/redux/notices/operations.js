import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { endPoints } from 'constants/EndPoints';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = endPoints.baseUrl;

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchCategory',
  async ({ path, params }, thunkAPI) => {
    try {
      const response = await axios.get(path, { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   };

//   // Utility to remove JWT
//   const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
//   };

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      //   toast.success('Contact added successfully');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      //   toast.success('Contact deleted successfully');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
