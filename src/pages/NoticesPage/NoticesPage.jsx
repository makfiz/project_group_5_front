import { Suspense, useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategories } from 'components/NoticesCategories/NoticesCategories';
import { PaginationNotices } from 'components/PaginationNotices/PaginationNotices';
import { LernMoreModal } from 'components/LernMoreModal/LernMoreModal';
import { Container } from 'components/Container/Container';

import { ToTopButton, Icon } from './NoticesPage.styled';

const scroll = Scroll.animateScroll;

const NoticesPage = () => {
  const [visibe, setVisible] = useState(false);
  const itemNotice = useSelector(state => state.notices.notice);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 1000) {
      setVisible(true);
    }
    if (position <= 1000) {
      setVisible(false);
    }
  };

  useEffect(() => {
    scroll.scrollToTop();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
