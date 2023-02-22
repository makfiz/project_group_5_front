import { LogoutButton, LogoutIcon, ButtonText } from './Logout.styled';
import { useDispatch } from 'react-redux';
import authOperations from '../../../redux/auth/operations';

const dispatch = useDispatch();

const onClick = async () => {
  dispatch(authOperations.logout());
}

export const Logout = ({ onClick }) => {
  return (
    <LogoutButton onClick={onClick}>
      <LogoutIcon />
      <ButtonText>Log Out</ButtonText>
    </LogoutButton>
  );
};
