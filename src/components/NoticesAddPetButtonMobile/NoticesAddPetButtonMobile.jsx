import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AddPetMobileButton,
  AddPetMobileButtonText,
} from './NoticesAddPetButtonMobile.styled';

import { ReactComponent as PlusIconMobile } from '../../assets/icons/plusIconMobile.svg';
import { AddModalNotice } from 'components/AddModalNotice/AddModalNotice';
import { useNavigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { showWarningNotification } from 'utils';

export const NoticesAddPetButtonMobile = () => {
  const menuState = useSelector(state => state.menuState.isMenuOpen);
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(prev => {
      return !prev;
    });
  };

  const handleAddPetButtonClick = e => {
    if (!isLoggedIn) {
      return showWarningNotification(
        'Only authorized users can add new notice',
        2500
      );
    }
    handleModalToggle();
  };

  return (
    <>
      {!menuState ? (
        <>
          <AddPetMobileButton type="button" onClick={handleAddPetButtonClick}>
            <AddPetMobileButtonText>Add pet</AddPetMobileButtonText>
            <PlusIconMobile />
          </AddPetMobileButton>
          {isModalOpen && (
            <AddModalNotice handleModalToggle={handleModalToggle} />
          )}
        </>
      ) : null}
    </>
  );
};
