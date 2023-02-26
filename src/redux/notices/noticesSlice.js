import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import * as operations from './operations';

const extraActions = [
  operations.fetchNoticesByCategory,
  operations.fetchFavoriteNotices,
  operations.fetchOwnNotices,
  operations.addNoticeToFavorite,
  operations.removeNoticeFromFavorite,
  operations.deleteOnFavoritePage,
  operations.deleteOwnNotice,
  operations.fetchNoticeById,
];
const getActions = type => extraActions.map(action => action[type]);

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    ads: [],
    isLoading: false,
    page: 1,
    totalPages: 0,
    totalCount: 0,
    error: null,
    notice: [],
  },
  reducers: {
    addToFavoriteInModal(state, action) {
      const idx = state.ads.findIndex(ad => ad._id === action.payload.noticeId);
      state.ads[idx].favoritesIn.push(action.payload.userId);
    },
  },

  extraReducers: builder =>
    builder
      .addCase(
        operations.fetchNoticesByCategory.fulfilled,
        reducers.fetchCategoryReducer
      )
      .addCase(
        operations.fetchFavoriteNotices.fulfilled,
        reducers.fetchCategoryReducer
      )
      .addCase(
        operations.fetchOwnNotices.fulfilled,
        reducers.fetchCategoryReducer
      )
      .addCase(
        operations.addNoticeToFavorite.fulfilled,
        reducers.toggleFavoriteReducer
      )
      .addCase(
        operations.removeNoticeFromFavorite.fulfilled,
        reducers.toggleFavoriteReducer
      )
      .addCase(
        operations.deleteOnFavoritePage.fulfilled,
        reducers.deleteFromFavoritePageReducer
      )
      .addCase(
        operations.deleteOwnNotice.fulfilled,
        reducers.deleteOwnNoticeReducer
      )
      .addCase(
        operations.fetchNoticeById.fulfilled,
        reducers.fetchNoticeReducer
      )
      .addCase(operations.cleanNotice.fulfilled, reducers.cleanNoticeReducer)

      .addMatcher(isAnyOf(...getActions('pending')), reducers.pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), reducers.rejectedReducer),
});

export const { addToFavoriteInModal } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
