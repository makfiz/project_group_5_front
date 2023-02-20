import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  LinkRedirect,
  Link,
  GoogleIcon,
  Text,
  Line,
} from './ChooseRegistration.styled';

import Icon from '../../assets/icons/google-icon.svg';
import Modal from 'components/Modal/Modal';
import { Box } from 'components/Box/Box';

import { registration } from 'redux/auth/operations';

export const ChooseRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsModalOpen(true);
  });

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onAuth = () => {
    dispatch(registration());
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClick={onCloseModal}>
          <Box mb={5}>
            <LinkRedirect to="/registration">
              Sign up with phone or email
            </LinkRedirect>
          </Box>

          <Text> or</Text>

          <Link onClick={onAuth}>
            <GoogleIcon src={Icon} alt="Google Icon" />
            <p>Continue with Google</p>
          </Link>
        </Modal>
      )}
    </>
  );
};
