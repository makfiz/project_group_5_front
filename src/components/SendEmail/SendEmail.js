import { useDispatch } from 'react-redux';

import { Button } from 'components/Button/Button';
import { Wraper, StyledButton, Title } from './SendEmail.styled';

import { closeForm } from 'redux/form/formSlice';

export const SendEmail = () => {
  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(closeForm());

    console.log('send email');
  };

  return (
    <Wraper>
      <Title>check your e-mail for confirmation</Title>
      <Button
        style={StyledButton}
        onClick={handleSend}
        children="
re-sent the letter"
      />
    </Wraper>
  );
};
