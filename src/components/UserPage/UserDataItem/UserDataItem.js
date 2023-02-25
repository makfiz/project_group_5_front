import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export const UserDataItem = ({ label, value, name }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleInputChange = event => {
    setCurrentValue(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    console.log(form.elements[0].value);
    console.log(form.name);
    dispatch(
      authOperations.userUpdate({ [form.name]: form.elements[0].value })
    );
    // form.reset();
    handleEditClick();
  };

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
          <EditButton type="button" onClick={handleEditClick}>
            <EditIcon />
          </EditButton>
        </UserInfoWrapper>
      )}
    </UserDataItemWrapper>
  );
};
