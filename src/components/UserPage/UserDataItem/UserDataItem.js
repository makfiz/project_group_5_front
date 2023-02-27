import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  UserDataItemWrapper,
  EditButton,
  DoneButton,
  EditIcon,
  DoneIcon,
  ShowInput,
  EditInput,
  UserInfoLabel,
  UserInfoWrapper,
} from './UserDataItem.styled';
import authOperations from 'redux/auth/operations';
import { tr } from 'date-fns/locale';

export const UserDataItem = ({
  isUserEditing,
  setIsUserEditing,
  label,
  value,
  name,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleInputChange = event => {
    setCurrentValue(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setIsUserEditing(!isUserEditing);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      authOperations.userUpdate({ [form.name]: form.elements[0].value })
    );
    // form.reset();
    handleEditClick();
  };

  // const btnDisabler = async globalEdit => {
  //   const { isUserEditing, setIsUserEditing } = await globalEdit;
  //   console.log('isUserEditing,', isUserEditing);
  //   console.log('isEditing,', isEditing);
  //   if (isUserEditing && isEditing) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <UserDataItemWrapper>
      <UserInfoLabel>{label}:</UserInfoLabel>
      {isEditing ? (
        <UserInfoWrapper>
          <form name={name} onSubmit={handleSubmit}>
            {' '}
            <EditInput
              type="text"
              value={currentValue}
              onChange={handleInputChange}
            />
            <DoneButton
              type="submit"
              // onSubmit={handleSubmit}
              // onClick={handleEditClick}
            >
              <DoneIcon />
            </DoneButton>
          </form>
        </UserInfoWrapper>
      ) : (
        <UserInfoWrapper>
          <ShowInput
            type="text"
            value={currentValue}
            onChange={handleInputChange}
            disabled
          />
          <EditButton
            disabled={isUserEditing}
            type="button"
            onClick={handleEditClick}
          >
            <EditIcon />
          </EditButton>
        </UserInfoWrapper>
      )}
    </UserDataItemWrapper>
  );
};
