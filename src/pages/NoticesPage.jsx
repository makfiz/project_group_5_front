import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategories } from 'components/NoticesCategories/NoticesCategories';
import { PaginationNotices } from 'components/PaginationNotices/PaginationNotices';
import { LernMoreModal } from 'components/LernMoreModal/LernMoreModal';

const NoticesPage = () => {
  return (
    <section>
      <NoticesSearch />
      <NoticesCategories />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <PaginationNotices />
      <LernMoreModal />
    </section>
  );
};

export default NoticesPage;
