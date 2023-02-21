import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategories } from 'components/NoticesCategories/NoticesCategories';
import { PaginationNotices } from 'components/PaginationNotices/PaginationNotices';

const NoticesPage = () => {
  return (
    <section>
      <NoticesSearch />
      <NoticesCategories />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <PaginationNotices />
    </section>
  );
};

export default NoticesPage;
