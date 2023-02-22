import { LogoutButton, LogoutIcon, ButtonText } from './Logout.styled';

export const Logout = ({ onClick }) => {
  return (
    <LogoutButton onClick={onClick}>
      <LogoutIcon />
      <ButtonText>Log Out</ButtonText>
    </LogoutButton>
  );
};
