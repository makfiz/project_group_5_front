import { LoginForm } from 'components/LoginForm/LoginForm';
import { Wraper } from 'pages/RegisterPage/RegisterPage.styled';
import { Container } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <Wraper>
        <Container>
          <LoginForm />
        </Container>
      </Wraper>
    </>
  );
};

export default LoginPage;
