import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { endPoints } from 'constants/EndPoints';
// import toast from 'react-hot-toast';
const url = `https://petssuport4815162342api.onrender.com/`;

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

export const fetchNoticeById = createAsyncThunk(
  'noticec/fetchById',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.get(`${url}id/${noticeId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
