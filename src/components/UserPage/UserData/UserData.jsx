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
import { UserDataItem } from '../UserDataItem/UserDataItem';
import { Logout } from '../Logout/Logout';
import { UserPhoto } from './UserPhoto';

export const UserData = ({ user }) => {
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
          <UserDataItem label="Name" value="Anton" />
          <UserDataItem label="Email" value="Anton@email.com" />
          <UserDataItem label="Birthday" value="30.06.1985" />
          <UserDataItem label="Phone" value="+380670000000" />
          <UserDataItem label="City" value="Dnipro" />
        </UserDataWrapper>
        <Logout />
      </UserInfoCard>
    </Container>
  );
};
