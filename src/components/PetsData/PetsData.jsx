import PropTypes from 'prop-types';
import { NoticesCategories } from 'components/NoticesCategories/NoticesCategories';
import { PetsList } from 'components/PestList/PestList';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { ModalAddPet } from 'components/ModalAddPet/ModalAddPet';

import {
  AddTitle,
  BtnBox,
  BoxTitlePet,
  BoxMessage,
  Message,
} from './PetsData.styled';
import ModalAddPet from 'components/ModalAddPet/ModalAddPet';

export const PetsData = ({ pets }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  //console.log(pets.length);
  return (
    <>
      <BoxTitlePet>
        <ModalTitle>My pets:</ModalTitle>
        <BtnBox>
          <AddTitle>Add pet</AddTitle>
          <NoticesCategories closeModal={closeModal} />
        </BtnBox>
      </BoxTitlePet>
      {isModalOpen && (
        <Modal onClose={closeModal} modalType={'addPet'}>
          <ModalAddPet onClose={closeModal} />
        </Modal>
      )}
      {pets.length === 0 ? (
        <BoxMessage>
          <Message>
            There is no pet here yet. Please, add your first pet
          </Message>
        </BoxMessage>
      ) : (
        <PetsList pets={pets} />
      )}
    </>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
