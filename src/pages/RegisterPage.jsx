import { Box } from 'components/Box/Box';
import Modal from '../components/Modal/Modal';
import { useState, useEffect } from 'react';

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
      <h1>register test modal</h1>

      {isModalOpen && (
        <Modal onClick={closeModal}>
          <Box width={500} textAlign="center">
            <h1>title</h1>
            <p>name</p>
            <p>email</p>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
