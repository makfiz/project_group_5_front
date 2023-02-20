import { LoginBtn, RegisterBtn } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <LoginBtn to="/login">Login</LoginBtn>
      <RegisterBtn to="/registration">Registration</RegisterBtn>
    </>
  );
};
