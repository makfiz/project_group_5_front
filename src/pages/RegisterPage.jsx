import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Modal from '../components/Modal/Modal';
import { SendEmail } from 'components/SendEmail/SendEmail';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { closeForm, showForm } from 'redux/form/formSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isSending, showRegisterForm } = useSelector(state => state.form);

  useEffect(() => {
    dispatch(showForm());
  }, []);

  const closeModal = () => {
    dispatch(closeForm());
  };

  return (
    <>
      {showRegisterForm && (
        <Modal onClick={closeModal}>
          <RegistrationForm />
        </Modal>
      )}

      {isSending && (
        <Modal onClick={closeModal}>
          <SendEmail />
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
