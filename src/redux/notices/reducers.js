export const pendingReducer = state => {
  state.isLoading = true;
};
export const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
export const toggleFavoriteReducer = (state, action) => {
  const idx = state.ads.findIndex(ad => ad._id === action.payload.notice._id);
  state.ads.splice(idx, 1, action.payload.notice);
  state.isLoading = false;
};

export const fetchCategoryReducer = (state, action) => {
  state.ads = action.payload.notices;
  state.page = action.payload.page;
  state.totalPages = action.payload.totalPages;
  state.totalCount = action.payload.totalCount;
  state.error = null;
  state.isLoading = false;
};

export const deleteFromFavoritePageReducer = (state, action) => {
  const idx = state.ads.findIndex(ad => ad._id === action.payload.notice._id);
  state.ads.splice(idx, 1);
  state.isLoading = false;
};

export const deleteOwnNoticeReducer = (state, action) => {
  const idx = state.ads.findIndex(ad => ad._id === action.payload.noticeId);
  state.ads.splice(idx, 1);
  state.isLoading = false;
};

export const fetchNoticeReducer = (state, action) => {
  state.notice = [{ ...action.payload.notice, ...action.payload.contacts }];
  state.isLoading = false;
};

export const cleanNoticeReducer = (state, _) => {
  state.notice = [];
  state.isLoading = false;
};

export const addNotice = (state, action) => {
  state.ads = [...state.ads, action.payload.notice];
  state.isLoading = false;
};
