import React, { useState } from 'react';

import { Box } from 'components/Box/Box';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import ModalAddPet from '../../ModalAddPet/ModalAddPet';

import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg';

import {
  Container,
  AddPetBtn,
  Title,
  Text,
  AddPetBoxWrapper,
} from './PetsData.styled';
import Modal from 'components/ModalForAdd/Modal';

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
        <ModalWindow onClick={closeModal}>
          <ModalAddPet onCloseModal={() => closeModal(false)} />
        </ModalWindow>
      )}
    </Container>
  );
};
