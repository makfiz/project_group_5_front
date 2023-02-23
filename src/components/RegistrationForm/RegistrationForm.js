import { useState } from 'react';
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';

import { ModalTitle } from 'components/ModalTitle/ModalTitle';
import { Button } from 'components/Button/Button';
import { schema } from 'utils/registerValidationSchema';

import {
  Wraper,
  LinkText,
  NavLink,
  StyledButton,
  StyledNextButton,
  Form,
  Input,
  ButtonWraper,
  NextButtonWraper,
  LinkWraper,
  ErrorMessage,
  InputPasswordWraper,
  IconWraper,
  ShowIcon,
  HideIcon,
} from './RegistrationForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  mobilePhone: '',
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [onNext, setOnNext] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmePassword, setShowConfirmePassword] = useState(false);

  const [inputType, setInputType] = useState(true);
  const [inputConfirmeType, setInputConfirmeType] = useState(true);
  const [sendEmail, setSendEmail] = useState(false);

  const handleNextClick = () => {
    setOnNext(true);
  };

  const handleBackClick = () => {
    setOnNext(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (values === '') {
      return;
    }

    const { email, password, name, city, mobilePhone } = values
    const phone = toString(mobilePhone);
    console.log({ email, password, name, city, phone });
    dispatch(authOperations.registration({ email, password, name, city,  phone }));
    dispatch(sendingEmail());
    dispatch(hideForm());

    resetForm();
    setSendEmail(true);
  };

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  const onShowConfirmePassword = () => {
    setShowConfirmePassword(prevState => !prevState);
    setInputConfirmeType(prevState => !prevState);
  };

  const onRegister = () => {};

  return (
    <>
      <Wraper>
        <ModalTitle children="Registration" />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            {!onNext ? (
              <>
                <Input type="email" name="email" placeholder="Email" />
                <ErrorMessage component="span" name="email" />

                <InputPasswordWraper>
                  <Input
                    type={inputType ? 'password' : 'text'}
                    name="password"
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

                <InputPasswordWraper>
                  <Input
                    type={inputConfirmeType ? 'password' : 'text'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />

                  <IconWraper>
                    {showConfirmePassword ? (
                      <ShowIcon onClick={onShowConfirmePassword} />
                    ) : (
                      <HideIcon onClick={onShowConfirmePassword} />
                    )}
                  </IconWraper>
                </InputPasswordWraper>
                <ErrorMessage component="span" name="confirmPassword" />

                <NextButtonWraper>
                  <Button
                    style={StyledNextButton}
                    onClick={handleNextClick}
                    children="Next"
                  />
                </NextButtonWraper>

                <LinkWraper>
                  <LinkText>Already have an account?</LinkText>
                  <NavLink to="/login">Login</NavLink>
                </LinkWraper>
              </>
            ) : (
              <>
                <Input type="text" name="name" placeholder="Name" />
                <ErrorMessage component="span" name="name" />
                <Input type="text" name="city" placeholder="City, region" />
                <ErrorMessage component="span" name="city" />
                <Input
                  type="number"
                  name="mobilePhone"
                  placeholder="Mobile phone"
                />
                <ErrorMessage component="span" name="mobilePhone" />
                <ButtonWraper>
                  <Button
                    style={StyledButton}
                    type="submit"
                    children="Register"
                    onClick={onRegister}
                  />
                  <Button
                    style={StyledButton}
                    onClick={handleBackClick}
                    children="Back"
                  />
                </ButtonWraper>
                <LinkWraper>
                  <LinkText>Already have an account?</LinkText>
                  <NavLink to="/login">Login</NavLink>
                </LinkWraper>
                {sendEmail && <Navigate to="/confirm-email" />}
              </>
            )}
          </Form>
        </Formik>
      </Wraper>
    </>
  );
};
