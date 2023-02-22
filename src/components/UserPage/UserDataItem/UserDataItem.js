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

  return (
    <UserDataItemWrapper>
      <UserInfoLabel>{label}:</UserInfoLabel>
      {isEditing ? (
        <UserInfoWrapper>
          <EditInput
            type="text"
            value={currentValue}
            onChange={handleInputChange}
          />
          <DoneButton onClick={handleEditClick}>
            <DoneIcon />
          </DoneButton>
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
