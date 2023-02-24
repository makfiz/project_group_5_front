import React, { useState } from 'react';

import { Box } from 'components/Box/Box';
import { ModalAddsPet } from 'components/UserPage/ModalAddPets/ModalAddPets';
import Modal from 'components/ModalForAdd/Modal';


import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg';

import {
  Container,
  AddPetBtn,
  Title,
  Text,
  AddPetBoxWrapper,
} from './PetsData.styled';

export const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    !setIsModalOpen(false);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title>My pets:</Title>
        <AddPetBoxWrapper>
          <Text>Add pet</Text>
          <AddPetBtn type="button" onClick={() => setIsModalOpen(true)}>
            <PlusIcon />
          </AddPetBtn>
        </AddPetBoxWrapper>
      </Box>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <ModalAddsPet onCloseModal={closeModal} />
        </Modal>
      )}
    </Container>
  );
};
