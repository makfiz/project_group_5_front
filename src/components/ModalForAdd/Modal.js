import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClick }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown({ code }) {
    if (code === 'Escape') {
      onClick();
    }
  }

  function handleBackDropClick({ target, currentTarget }) {
    if (target === currentTarget) {
      onClick();
    }
  }

  return createPortal(
    <Backdrop onClick={handleBackDropClick} color="transparen" filter="true">
      <StyledModal>{children}</StyledModal>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
