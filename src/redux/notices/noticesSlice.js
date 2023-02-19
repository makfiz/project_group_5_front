import { createSlice } from '@reduxjs/toolkit';
import { fetchNoticesByCategory } from './operations';

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

  extraReducers: {
    [fetchNoticesByCategory.pending](state, action) {},
    [fetchNoticesByCategory.fulfilled](state, action) {
      return {
        ...state,
        ads: [...action.payload.notices],
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        totalCount: action.payload.totalCount,
      };
    },
    [fetchNoticesByCategory.rejected](state, action) {},
  },

  //   reducers: {
  //     addNotice(state, action) {},
  //     deleteNotice(state, action) {},
  //   },

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
