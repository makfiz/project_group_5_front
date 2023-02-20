import { useState, useEffect } from 'react';

import Modal from '../components/Modal/Modal';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <>
            <LoginForm />
          </>
        </Modal>
      )}
    </>
  );
};

export default LoginPage;
