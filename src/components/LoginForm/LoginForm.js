import { Formik } from 'formik';

import { ModalTitle } from 'components/ModalTitle/ModalTitle';
import { Button } from 'components/Button/Button';

import {
  Wraper,
  LinkText,
  NavLink,
  StyledButton,
  Form,
  Input,
  ButtonWraper,
  LinkWraper,
  ErrorMessage,
} from './LoginForm.styled';
import { schema } from 'utils/loginValidationSchema';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    if (values === '') {
      return;
    }
    resetForm();
  };

  const onHandleClick = () => {
    console.log('login');
  };

  return (
    <>
      <Wraper>
        <ModalTitle children="Login" />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <Input type="email" name="email" placeholder="Email" />
            <ErrorMessage component="span" name="email" />

            <Input type="password" name="password" placeholder="Password" />
            <ErrorMessage component="span" name="password" />

            <ButtonWraper>
              <Button
                style={StyledButton}
                type="submit"
                onClick={onHandleClick}
                children="Login"
              />
            </ButtonWraper>

            <LinkWraper>
              <LinkText>Don't have an account? </LinkText>
              <NavLink to="/registration">Register</NavLink>
            </LinkWraper>
          </Form>
        </Formik>
      </Wraper>
    </>
  );
};
