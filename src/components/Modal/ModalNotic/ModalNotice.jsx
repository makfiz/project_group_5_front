import { createPortal } from 'react-dom';
import { Backdrop, StyledModal } from './ModalNotice.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalNotice = ({ children, onClick }) => {
  return createPortal(
    <Backdrop onClick={onClick}>
      <StyledModal>{children}</StyledModal>
    </Backdrop>,
    modalRoot
  );
};
