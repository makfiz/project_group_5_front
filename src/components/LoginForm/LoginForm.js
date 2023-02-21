import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { ModalTitle } from 'components/ModalTitle/ModalTitle';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';

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
  ShowIcon,
  HideIcon,
  InputPasswordWraper,
  IconWraper,
} from './LoginForm.styled';
import { schema } from 'utils/loginValidationSchema';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(true);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');

    resetForm();
  };

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  const onHandleClick = () => {
    console.log('must redirect on another page');
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
            <Input type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <ErrorMessage component="span" name="email" />

            <InputPasswordWraper>
              <Input
                type={inputType ? 'password' : 'text'}
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
              <IconWraper>
                {showPassword ? (
                  <ShowIcon onClick={onShowPassword} />
                ) : (
                  <HideIcon onClick={onShowPassword} />
                )}
              </IconWraper>
            </InputPasswordWraper>
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
