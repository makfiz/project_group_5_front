import { Button } from 'components/Button/Button';
import { Wraper, StyledButton, Title } from './SendEmail.styled';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

export const SendEmail = () => {
  const dispatch = useDispatch();
  const handleSend = () => {
    console.log('send email');
    const email = useSelector(selectUser).email;
    dispatch(authOperations.againVerifyMail({ email }));
  };

  return (
    <Wraper>
      <Title>check your e-mail to confirm</Title>
      <Button
        style={StyledButton}
        onClick={handleSend}
        children="
re-sent the letter"
      />
    </Wraper>
  );
};
