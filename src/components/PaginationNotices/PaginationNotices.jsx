import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTotalPages, selectCurrentPage } from 'redux/notices/selectors';
import { Box } from 'components/Box/Box';
import { PaginationWrap, Pagination } from './PaginationNotices.styled';

export const PaginationNotices = () => {
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);

  const [, setSearchParams] = useSearchParams();
  const handlePageClick = e => setSearchParams({ page: e.selected + 1 });

  return (
    <>
      {totalPages > 1 && (
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
