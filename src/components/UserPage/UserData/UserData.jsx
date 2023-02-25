import React, { useState } from 'react';
import {
  Container,
  UserInfoCard,
  UserPageHeader,
  UserPhotoThumb,
  UserDataWrapper,
} from './UserData.styled';
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
          <UserPhoto user={user} />
        </UserPhotoThumb>
        <UserDataWrapper>
          <UserDataItem name="name" label="Name" value={!name ? '' : name} />
          <UserDataItem
            name="email"
            label="Email"
            value={!email ? '' : email}
          />
          <UserDataItem
            name="birthday"
            label="Birthday"
            value={!birthday ? '' : birthday}
          />
          <UserDataItem
            name="phone"
            label="Phone"
            value={!phone ? '' : phone}
          />
          <UserDataItem name="city" label="City" value={!city ? '' : city} />
        </UserDataWrapper>
        <Logout />
      </UserInfoCard>
    </Container>
  );
};
