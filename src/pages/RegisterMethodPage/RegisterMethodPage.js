import { Container } from './RegisterMethodPage.styled';
import { ChooseRegistration } from 'components/ChooseRegistration/ChooseRegistration';
import { Wraper } from 'pages/RegisterPage/RegisterPage.styled';

const RegisterMethodPage = () => {
  return (
    <Wraper>
      <Container>
        <ChooseRegistration />
      </Container>
    </Wraper>
  );
};

export default RegisterMethodPage;
