import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';

export const SharedLayout = ({ toggleTheme, theme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
