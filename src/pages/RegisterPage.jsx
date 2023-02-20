import Modal from '../components/Modal/Modal';
import { useState, useEffect } from 'react';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
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
            <RegistrationForm />
          </>
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
