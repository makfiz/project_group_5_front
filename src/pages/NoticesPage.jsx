import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategories } from 'components/NoticesCategories/NoticesCategories';
import { PaginationNotices } from 'components/PaginationNotices/PaginationNotices';
import { LernMoreModal } from 'components/LernMoreModal/LernMoreModal';
import { useSelector } from 'react-redux';

const NoticesPage = () => {
  const itemNotice = useSelector(state => state.notices.notice);

  return (
    <section>
      <NoticesSearch />
      <NoticesCategories />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <PaginationNotices />
      {itemNotice.length > 0 && <LernMoreModal />}
    </section>
  );
};

export default NoticesPage;
