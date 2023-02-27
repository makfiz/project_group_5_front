import { Suspense, useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategories } from 'components/NoticesCategories/NoticesCategories';
import { PaginationNotices } from 'components/PaginationNotices/PaginationNotices';
import { LernMoreModal } from 'components/LernMoreModal/LernMoreModal';
import { useSelector } from 'react-redux';
import { Container } from 'components/Container/Container';

import { ToTopButton, Icon } from './NoticesPage.styled';

const scroll = Scroll.animateScroll;

const NoticesPage = () => {
  const [visibe, setVisible] = useState(true);
  const itemNotice = useSelector(state => state.notices.notice);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 500) {
      setVisible(true);
    }
    if (position <= 500) {
      setVisible(false);
    }
  };

  useEffect(() => {
    scroll.scrollToTop();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const toTopButton = () => {
    scroll.scrollToTop();
  };

  return (
    <section>
      <Container>
        <NoticesSearch />
        <NoticesCategories />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <PaginationNotices />
        {itemNotice.length > 0 && <LernMoreModal />}
        {visibe && (
          <ToTopButton type="button" onClick={toTopButton}>
            <Icon size={50} />
          </ToTopButton>
        )}
      </Container>
    </section>
  );
};

export default NoticesPage;
