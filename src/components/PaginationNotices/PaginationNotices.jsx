import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectTotalPages,
  selectCurrentPage,
  selectIsLoadingNotices,
  selectIsNoticesError,
} from 'redux/notices/selectors';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { Box } from 'components/Box/Box';
import { PaginationWrap, Pagination } from './PaginationNotices.styled';

export const PaginationNotices = () => {
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);

  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageClick = e => {
    const search = searchParams.get('search') ?? '';
    setSearchParams(
      search !== ''
        ? { search, page: e.selected + 1 }
        : { page: e.selected + 1 }
    );
  };

  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoadingNotices);
  const error = useSelector(selectIsNoticesError);

  const showPagination =
    totalPages > 1 && !isLoading && !error && !isRefreshing;
  return (
    <>
      {showPagination && (
        <Box display="flex" justifyContent="center">
          <PaginationWrap>
            <Pagination
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={totalPages}
              previousLabel="<"
              renderOnZeroPageCount={null}
              forcePage={currentPage - 1}
            />
          </PaginationWrap>
        </Box>
      )}
    </>
  );
};
