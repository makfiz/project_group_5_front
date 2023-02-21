import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal/Modal';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { SendEmail } from 'components/SendEmail/SendEmail';

const RegisterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <RegistrationForm />
        </Modal>
      )}

      {isSendEmail && (
        <Modal onClick={closeModal}>
          <SendEmail />
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
