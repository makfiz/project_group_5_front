import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HOST = 'http://localhost:3000/api/';

export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${HOST}`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.users.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Pets'],
  endpoints: (builder) => ({
    addPet: builder.mutation({
      query: (payload) => ({
        url: '/pets',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Pets']
    }),
    updatePetImage: builder.mutation({
      query: (payload) => ({
        url: `/pets/${payload._id}/upload`,
        method: 'PATCH',
        body: payload.petImage
      }),
      invalidatesTags: ['Pets']
    }),
    deletePet: builder.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Pets']
    })
  })
});

export const { useAddPetMutation, useUpdatePetImageMutation, useDeletePetMutation } = petsApi;
