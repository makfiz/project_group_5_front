import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNoticesByCategory,
  addNoticeToFavorite,
  removeNoticeFromFavorite,
} from './operations';

export const pendingReducer = state => {
  state.isLoading = true;
};
export const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const toggleFavoriteReducer = (state, action) => {
  const idx = state.ads.findIndex(ad => ad._id === action.payload.notice._id);
  state.ads.splice(idx, 1, action.payload.notice);
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    ads: [],
    isLoading: false,
    page: 1,
    totalPages: 0,
    totalCount: 0,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchNoticesByCategory.pending, pendingReducer)
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        state.ads = action.payload.notices;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalCount = action.payload.totalCount;
        state.error = null;
      })
      .addCase(fetchNoticesByCategory.rejected, rejectedReducer)
      .addCase(addNoticeToFavorite.pending, pendingReducer)
      .addCase(addNoticeToFavorite.fulfilled, toggleFavoriteReducer)
      .addCase(addNoticeToFavorite.rejected, rejectedReducer)
      .addCase(removeNoticeFromFavorite.pending, pendingReducer)
      .addCase(removeNoticeFromFavorite.fulfilled, toggleFavoriteReducer)
      .addCase(removeNoticeFromFavorite.rejected, rejectedReducer),

  //   extraReducers: builder =>
  //     builder
  //       .addCase(fetchContacts.fulfilled, reducers.fetchContactsSuccessReducer)
  //       .addCase(addContact.fulfilled, reducers.addContactSuccessReducer)
  //       .addCase(deleteContact.fulfilled, reducers.deleteContactSuccessReducer)
  //       .addMatcher(isAnyOf(...getActions('pending')), reducers.pendingReducer)
  //       .addMatcher(isAnyOf(...getActions('rejected')), reducers.rejectedReducer)
  //       .addMatcher(
  //         isAnyOf(...getActions('fulfilled')),
  //         reducers.fulfilledReducer
  //       ),
});

// export const fetchContactsSuccessReducer = (state, action) => {
//     state.items = action.payload;
//   };
//   export const addContactSuccessReducer = (state, action) => {
//     state.items.push(action.payload);
//   };
//   export const deleteContactSuccessReducer = (state, action) => {
//     const index = state.items.findIndex(item => item.id === action.payload.id);
//     state.items.splice(index, 1);
//   };
//   export const toggleFavouriteSuccessReducer = (state, action) => {
//     const index = state.items.findIndex(contact => contact.id === action.payload.id);
//     state.items.splice(index, 1, action.payload);
//   };
//   export const pendingReducer = state => {
//     state.isLoading = true;
//   };
//   export const rejectedReducer = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   };
//   export const fulfilledReducer = state => {
//     state.isLoading = false;
//     state.error = null;
//   };

export const noticesReducer = noticesSlice.reducer;
