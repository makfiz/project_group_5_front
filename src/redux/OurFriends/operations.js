import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api/';

export const fetchOurFriends = createAsyncThunk(
  'ourFriends/getAllFriends',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('friends/');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
