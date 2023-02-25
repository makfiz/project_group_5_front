import { useEffect, createRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { BackDrop, Modal, CloseBtn } from './ModalWindow.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

export const ModalWindow = ({
  children,
  onClose,
  modalType,
  closeInnerList,
}) => {
  const [modalHeight, setModalHeight] = useState();
  const modalRef = createRef();

  const viewPortHeight = window.innerHeight;

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropclick = e => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };

  const closeInnerHandler = e => {
    if (!closeInnerList) {
      return;
    }

    if (e.target === e.currentTarget) {
      closeInnerList();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = 'auto';
    };
  });

  useEffect(() => {
    const height = modalRef.current.getBoundingClientRect().height;
    setModalHeight(height);
  }, [modalRef]);

  return createPortal(
    <BackDrop onClick={handleBackdropclick}>
      <Modal
        modalType={modalType}
        ref={modalRef}
        modalHeight={modalHeight}
        viewPortHeight={viewPortHeight}
        onClick={closeInnerHandler}
      >
        {children}
        <CloseBtn type="button" onClick={onClose}>
          <IoCloseOutline />
        </CloseBtn>
      </Modal>
    </BackDrop>,
    modalRoot
  );
};
