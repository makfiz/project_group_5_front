import { createSlice } from '@reduxjs/toolkit';
import {
  pendingReducer,
  rejectedReducer,
  fetchCategoryReducer,
  toggleFavoriteReducer,
  deleteFromFavoritePageReducer,
  deleteOwnNoticeReducer,
} from './reducers';
import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  fetchOwnNotices,
  addNoticeToFavorite,
  removeNoticeFromFavorite,
  deleteOnFavoritePage,
  deleteOwnNotice,
} from './operations';

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
      .addCase(fetchNoticesByCategory.fulfilled, fetchCategoryReducer)
      .addCase(fetchNoticesByCategory.rejected, rejectedReducer)
      .addCase(fetchFavoriteNotices.pending, pendingReducer)
      .addCase(fetchFavoriteNotices.fulfilled, fetchCategoryReducer)
      .addCase(fetchFavoriteNotices.rejected, rejectedReducer)
      .addCase(fetchOwnNotices.pending, pendingReducer)
      .addCase(fetchOwnNotices.fulfilled, fetchCategoryReducer)
      .addCase(fetchOwnNotices.rejected, rejectedReducer)
      .addCase(addNoticeToFavorite.pending, pendingReducer)
      .addCase(addNoticeToFavorite.fulfilled, toggleFavoriteReducer)
      .addCase(addNoticeToFavorite.rejected, rejectedReducer)
      .addCase(removeNoticeFromFavorite.pending, pendingReducer)
      .addCase(removeNoticeFromFavorite.fulfilled, toggleFavoriteReducer)
      .addCase(removeNoticeFromFavorite.rejected, rejectedReducer)
      .addCase(deleteOnFavoritePage.pending, pendingReducer)
      .addCase(deleteOnFavoritePage.fulfilled, deleteFromFavoritePageReducer)
      .addCase(deleteOnFavoritePage.rejected, rejectedReducer)
      .addCase(deleteOwnNotice.pending, pendingReducer)
      .addCase(deleteOwnNotice.fulfilled, deleteOwnNoticeReducer)
      .addCase(deleteOwnNotice.rejected, rejectedReducer),

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

export const noticesReducer = noticesSlice.reducer;
