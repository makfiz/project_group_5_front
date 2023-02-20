import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from 'components/Box/Box';
import { PaginationWrap, Pagination } from './PaginationNotices.styled';

export const PaginationNotices = () => {
  const totalPages = 10;
  //   useSelector()
  const currentPage = 1;
  //   useSelector()

  const [searchParams, setSearchParams] = useSearchParams();
  const handlePageClick = e => {
    setSearchParams({ page: e.selected + 1 });
  };

  //   Page come from selector
  // Total pages come from selector
  // TODO: if ads length <20 return
  return (
    <Box display="flex" justifyContent="center">
      <PaginationWrap>
        <Pagination
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={10}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={currentPage}
        />
      </PaginationWrap>
    </Box>
  );
};
