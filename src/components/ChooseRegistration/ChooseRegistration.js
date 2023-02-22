import { useState } from 'react';

import {
  LinkRedirect,
  Link,
  GoogleIcon,
  Text,
} from './ChooseRegistration.styled';

import Icon from '../../assets/icons/google-icon.svg';
import Modal from 'components/Modal/Modal';
import { Box } from 'components/Box/Box';

export const ChooseRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onAuth = () => {
    // dispatch(registration());
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

          <Link to= "https://petssuport4815162342api.onrender.com/api/users/google">
            <GoogleIcon src={Icon} alt="Google Icon" />
            <p>Continue with Google</p>
          </Link>
        </Modal>
      )}
    </>
  );
};

//  target ="_blank"
