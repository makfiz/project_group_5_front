import { LoginBtn, RegisterBtn } from './AuthNav.styled';

export const AuthNav = ({ onClick }) => {
  return (
    <>
      <LoginBtn to="/login" onClick={onClick}>
        Login
      </LoginBtn>
      <RegisterBtn to="/registration-redirect" onClick={onClick}>
        Registration
      </RegisterBtn>
    </>
  );
};
