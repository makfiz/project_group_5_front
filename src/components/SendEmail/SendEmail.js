import { Button } from 'components/Button/Button';
import { Wraper, StyledButton, Title } from './SendEmail.styled';

export const SendEmail = () => {
  const handleSend = () => {
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
