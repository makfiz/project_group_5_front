import Modal from 'components/Modal/Modal';
import { CancelBtn } from 'components/Button/CancelButton/CancelBtn';
import { Text, Wrap, StyledLink, Title, Button } from './WarningMessage.styled';

export const WarningMessage = ({
  onClose,
  text,
  title,
  type,
  approveFunk,
  id,
}) => {
  const clickHandler = () => {
    approveFunk(id);
    onClose();
  };

  return (
    <Modal onClose={onClose} modalType={'addPet'}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {type === 'auth' && (
        <Wrap>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </Wrap>
      )}
      {type === 'approve' && (
        <Wrap>
          <CancelBtn onClick={onClose} />
          <Button type="button" onClick={clickHandler}>
            Delete
          </Button>
        </Wrap>
      )}
    </Modal>
  );
};
