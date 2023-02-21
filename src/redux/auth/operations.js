import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petssuport4815162342api.onrender.com/api';

const unsetToken = () => {
    return axios.defaults.headers.common.Authorization = '';
};

const setToken = token => {
    return axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.setToken(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.get('/users/logout');
        token.unsetToken();
    } catch (error) {
        console.log(error);
    }
});

