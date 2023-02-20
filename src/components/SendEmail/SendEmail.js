import { Wraper, StyledButton } from './SendEmail.styled';

import { Button } from 'components/Button/Button';

export const SendEmail = () => {
  const handleSend = () => {
    console.log('send email');
  };
  return (
    <Wraper>
      <Button style={StyledButton} onClick={handleSend} children="send email" />
    </Wraper>
  );
};
