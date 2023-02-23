import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

export const addPet = createAsyncThunk(
  '/addPet',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/pets', credentials);
      // Notiflix.Notify.success('Success! Now you can login ✔', {
      //   timeout: 3000,
      // });
      return data;
    } catch (error) {
      console.log(error.message);
      // if (error.message === 'Request failed with status code 409') {
      //   Notiflix.Notify.failure('This user is already registered ⚠', {
      //     timeout: 3000,
      //   });
      // }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePetImage = createAsyncThunk(
  '/updatePetImage',
  async ({ petId, formData }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`pets/${petId}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  '/deletePet',
  async (credentials, thunkAPI) => {
    try {
      console.log('credentials', credentials);
      const { data } = await axios.delete(`/${payload._id}`, credentials);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const login = createAsyncThunk('/auth/login', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     setToken(data.token);
//     Notiflix.Notify.success('Success! Now you are logedin ✔', {
//       timeout: 3000,
//     });
//     return data;
//   } catch (error) {
//     console.log(error.message);
//     if (error.message === 'Request failed with status code 401') {
//       Notiflix.Notify.failure(
//         'Email, or password is wrong, or email is not verified. Please check your e-mail ⚠',
//         {
//           timeout: 3000,
//         }
//       );
//     }
//     if (error.message === 'Request failed with status code 400') {
//       Notiflix.Notify.failure('Not valid format of email or password ⚠', {
//         timeout: 3000,
//       });
//     }
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const logout = createAsyncThunk('/auth/logout', async () => {
//   try {
//     await axios.get('/users/logout');
//     unsetToken();
//   } catch (error) {
//     console.log(error);
//   }
// });

// const googleApi = createAsyncThunk('auth/google', async credentials => {
//   try {
//     setToken(credentials.token);
//     return credentials;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;
//   if (persistedToken === null || '') {
//     return thunkAPI.rejectWithValue('unauthorized access');
//   }
//   try {
//     setToken(persistedToken);
//     const response = await axios.get('/users/me');
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const userUpdate = createAsyncThunk(
//   '/auth/userUpdate',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.patch('/users/update', credentials);
//       Notiflix.Notify.success('Success! User updated! ✔', {
//         timeout: 3000,
//       });

//       return data;
//     } catch (error) {
//       console.log(error.message);
//       if (error.message === 'Request failed with status code 404') {
//         Notiflix.Notify.failure('User not found. Please register user! ⚠', {
//           timeout: 3000,
//         });
//       }
//       if (error.message === 'Request failed with status code 401') {
//         Notiflix.Notify.failure(
//           'jwt token is expired or not valid. Please login user! ⚠',
//           {
//             timeout: 3000,
//           }
//         );
//       }
//       if (error.message === 'Request failed with status code 400') {
//         Notiflix.Notify.failure(
//           'Not valid format of request body (check types of yuor request data) ⚠',
//           {
//             timeout: 3000,
//           }
//         );
//       }
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

const petsOperations = {
  addPet,
  updatePetImage,
  deletePet,
};

export default petsOperations;
