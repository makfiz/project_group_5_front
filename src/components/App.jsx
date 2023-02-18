import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';
import NewsPage from '../pages/NewsPage';

const FriendsPage = lazy(() => import('../pages/FriendsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  // const isRefreshing = useSelector()
  // const dispatch = useDispatch();

  //     useEffect(() => {
  //         dispatch();
  //     }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
