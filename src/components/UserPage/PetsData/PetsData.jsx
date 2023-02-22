import React, { useState } from 'react';

import { Box } from 'components/Box/Box';
import Modal from '../../Modal/Modal';
import { ModalAddsPet } from '../ModalAddPets/ModalAddPets';

import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg';

import { Container, AddPetBtn, Title, Text } from './PetsData.styled';

export const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title>My pets:</Title>
        <Box display="flex" alignItems="center">
          <Text>Add pet</Text>
          <AddPetBtn type="button" onClick={() => setIsModalOpen(true)}>
            <PlusIcon />
          </AddPetBtn>
        </Box>
      </Box>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <ModalAddsPet onCloseModal={closeModal} />
        </Modal>
      )}
    </Container>
  );
};
