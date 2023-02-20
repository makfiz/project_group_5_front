import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategories } from 'components/NoticesCategories/NoticesCategories';

const NoticesPage = () => {
  // const [query, setQuery] = useState('cadabra');

  return (
    <section>
      <NoticesSearch />
      <NoticesCategories />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default NoticesPage;
