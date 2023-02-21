import { useDispatch } from 'react-redux';

import { Button } from 'components/Button/Button';
import { Wraper, StyledButton } from './SendEmail.styled';

import { closeForm } from 'redux/form/formSlice';

export const SendEmail = () => {
  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(closeForm());

    console.log('send email');
  };

  return (
    <Wraper>
      <Button style={StyledButton} onClick={handleSend} children="send email" />
    </Wraper>
  );
};
