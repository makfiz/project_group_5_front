import { LoginBtn, RegisterBtn } from './AuthNav.styled';

export const AuthNav = ({ onClick }) => {
  return (
    <>
      <LoginBtn type="button" to="/login" onClick={onClick}>
        Login
      </LoginBtn>
      <RegisterBtn type="button" to="/registration" onClick={onClick}>
        Registration
      </RegisterBtn>
    </>
  );
};
