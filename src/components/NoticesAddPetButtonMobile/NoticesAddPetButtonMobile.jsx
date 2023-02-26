import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AddPetMobileButton,
  AddPetMobileButtonText,
} from './NoticesAddPetButtonMobile.styled';

import { ReactComponent as PlusIconMobile } from '../../assets/icons/plusIconMobile.svg';
import { AddModalNotice } from 'components/AddModalNotice/AddModalNotice';
import { useNavigate } from 'react-router';

export const NoticesAddPetButtonMobile = () => {
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(prev => {
      return !prev;
    });
  };

  return (
    <>
      <AddPetMobileButton
        type="button"
        onClick={e => {
          e.preventDefault();
          token ? handleModalToggle() : navigate('/login');
        }}
      >
        <AddPetMobileButtonText>Add pet</AddPetMobileButtonText>
        <PlusIconMobile />
      </AddPetMobileButton>
      {isModalOpen && <AddModalNotice handleModalToggle={handleModalToggle} />}
    </>
  );
};
