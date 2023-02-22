import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../redux/auth/operations';

import { SharedLayout } from './SharedLayout/SharedLayout';
import NewsPage from '../pages/NewsPage';
import { NoticesList } from './NoticesList/NoticesList';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const FriendsPage = lazy(() => import('../pages/FriendsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RedirectRegistrationPage = lazy(() =>
  import('pages/RedirectRegistrationPage')
);

export const App = () => {
  // const isRefreshing = useSelector()
  // const dispatch = useDispatch();

  //     useEffect(() => {
  //         dispatch();
  //     }, [dispatch]);

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const email = searchParams.get('email');
  const id = searchParams.get('id');
  console.log(searchParams);

  useEffect(() => {
    if (token) {
      dispatch(authOperations.googleApi({ token, email, id }));
    }
  }, [token, email, id, dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route index element={<Navigate to="sell" />} />
            <Route
              path="lost-found"
              element={<NoticesList askedPage="lost_found" />}
            />
            <Route
              path="for-free"
              element={<NoticesList askedPage="in_good_hands" />}
            />
            <Route
              path="sell"
              index
              element={<NoticesList askedPage="sell" />}
            />
            <Route
              path="favorite"
              element={<NoticesList askedPage="favorite" />}
            />
            <Route path="own" element={<NoticesList askedPage="own" />} />
          </Route>
          <Route path="friends" element={<FriendsPage />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute redirectTo="/user" component={RegisterPage} />
            }
          />
          <Route
            path="registration-redirect"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={RedirectRegistrationPage}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/user" component={LoginPage} />
            }
          />
          <Route
            path="user"
            element={<PrivateRoute redirectTo="/login" component={UserPage} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
