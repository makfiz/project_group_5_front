import {
  AccountBtn,
  AccountBtnWrapper,
  AccountBtnText,
  // AccountBtnIcon,
} from './UserNav.styled';
import { ReactComponent as AccountBtnIconComp } from '../../../../assets/icons/accountBtnIcon.svg';

export const UserNav = ({ onClick }) => {
  return (
    <>
      <AccountBtn to="user" onClick={onClick} type="button">
        <AccountBtnWrapper>
          <AccountBtnIconComp />
          <AccountBtnText>Account</AccountBtnText>
        </AccountBtnWrapper>
      </AccountBtn>
    </>
  );
};
