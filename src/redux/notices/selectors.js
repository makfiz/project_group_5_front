export const selectNoticesSearchQuery = state => state.noticesSearchQuery.query;
export const selectNotices = state => state.notices.ads;
export const selectTotalPages = state => state.notices.totalPages;
export const selectCurrentPage = state => state.notices.page;
export const selectIsLoadingNotices = state => state.notices.isLoading;
export const selectIsNoticesError = state => state.notices.error;
