import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { Wraper, Container } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Wraper>
      <Container>
        <RegistrationForm />
      </Container>
    </Wraper>
  );
};

export default RegisterPage;
