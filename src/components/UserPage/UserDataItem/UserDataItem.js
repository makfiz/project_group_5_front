import React, { useState } from 'react';

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

export const UserDataItem = ({ label, value }) => {
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
    // dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <UserDataItemWrapper>
      <UserInfoLabel>{label}:</UserInfoLabel>
      {isEditing ? (
        <UserInfoWrapper>
          <form onSubmit={handleSubmit}>
            {' '}
            <EditInput
              type="text"
              value={currentValue}
              onChange={handleInputChange}
            />
            <DoneButton onSubmit={handleSubmit} onClick={handleEditClick}>
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
          <EditButton onClick={handleEditClick}>
            <EditIcon />
          </EditButton>
        </UserInfoWrapper>
      )}
    </UserDataItemWrapper>
  );
};
