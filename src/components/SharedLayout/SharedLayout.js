import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Header } from '../Header/Header';
import { Loader } from 'components/Loader/Loader';
import { LoaderWrapper } from 'components/Loader/Loader.styled.jsx';

export const SharedLayout = ({ toggleTheme, theme }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Suspense
        fallback={
          <LoaderWrapper>
            <Loader Width={240} />
          </LoaderWrapper>
        }
      >
        {isRefreshing ? (
          <LoaderWrapper>
            <Loader Width={240} />
          </LoaderWrapper>
        ) : null}
        <Outlet />
      </Suspense>
    </>
  );
};
