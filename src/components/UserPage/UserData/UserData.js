import {
  Container,
  UserInfoCard,
  UserPageHeader,
  UserPhotoThumb,
  EditPhotoButton,
  EditPhotoIcon,
  EditPhotoButtonText,
} from './UserData.styled';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import { Logout } from '../Logout/Logout';

export const UserData = () => {
  return (
    <Container>
      <UserPageHeader>My information:</UserPageHeader>
      <UserInfoCard>
        <UserPhotoThumb>
          {/* <img src={UserPhoto} alt={username} width="233px" /> */}
        </UserPhotoThumb>
        <EditPhotoButton>
          <EditPhotoIcon />
          <EditPhotoButtonText>Edit photo</EditPhotoButtonText>
        </EditPhotoButton>
        <UserDataItem />
        <Logout />
      </UserInfoCard>
    </Container>
  );
};
