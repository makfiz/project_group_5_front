import { useState } from 'react';
import { Formik } from 'formik';

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
  const [onNext, setOnNext] = useState(false);

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
    console.log(values);
    resetForm();
  };

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

                <Input type="password" name="password" placeholder="Password" />
                <ErrorMessage component="span" name="password" />

                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
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
              </>
            )}
          </Form>
        </Formik>
      </Wraper>
    </>
  );
};
