import {
  Container,
  UserInfoCard,
  UserPageHeader,
  UserPhotoThumb,
  EditPhotoButton,
  EditPhotoIcon,
  EditPhotoButtonText,
  UserDataWrapper,
} from './UserData.styled';
import React from 'react';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import { Logout } from '../Logout/Logout';
import { UserPhoto } from './UserPhoto';

export const UserData = ({ user }) => {
  const { name, email, birthday, phone, city } = user;
  return (
    <Container>
      <UserPageHeader>My information:</UserPageHeader>
      <UserInfoCard>
        <UserPhotoThumb>
          <UserPhoto />
        </UserPhotoThumb>
        <EditPhotoButton>
          <EditPhotoIcon />
          <EditPhotoButtonText>Edit photo</EditPhotoButtonText>
        </EditPhotoButton>
        <UserDataWrapper>
          <UserDataItem label="Name" value={name} />
          <UserDataItem label="Email" value={email} />
          <UserDataItem label="Birthday" value={birthday} />
          <UserDataItem label="Phone" value={phone} />
          <UserDataItem label="City" value={city} />
        </UserDataWrapper>
        <Logout />
      </UserInfoCard>
    </Container>
  );
};
