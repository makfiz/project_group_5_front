import {
  AccountBtn,
  AccountBtnWrapper,
  AccountBtnText,
  AccountBtnIcon,
} from './UserNav.styled';

export const UserNav = ({ onClick }) => {
  return (
    <>
      <AccountBtn to="user" onClick={onClick}>
        <AccountBtnWrapper>
          <AccountBtnIcon />
          <AccountBtnText>Account</AccountBtnText>
        </AccountBtnWrapper>
      </AccountBtn>
    </>
  );
};
