import { LoginBtn, RegisterBtn } from './AuthNav.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
export const AuthNav = ({ onClick }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      {isRefreshing ? <Loader Width={40} /> : null}
      <LoginBtn to="/login" onClick={onClick}>
        Login
      </LoginBtn>
      <RegisterBtn to="/registration-redirect" onClick={onClick}>
        Registration
      </RegisterBtn>
    </>
  );
};
