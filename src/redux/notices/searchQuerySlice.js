import { createSlice } from '@reduxjs/toolkit';

const noticesSearckQuerySlice = createSlice({
  name: 'noticesSearhQuery',
  initialState: { query: '' },
  reducers: {
    setQueryValue(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQueryValue } = noticesSearckQuerySlice.actions;
export const noticesSearckQueryReducer = noticesSearckQuerySlice.reducer;
