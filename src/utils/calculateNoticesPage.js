export const calculateCurrentPage = (paramPage, totalPages) => {
  if (!paramPage) return 1;
  if (paramPage && paramPage <= totalPages) {
    return paramPage;
  }
  if (paramPage > totalPages) return totalPages;
};
